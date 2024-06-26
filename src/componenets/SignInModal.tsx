import React, { FC } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { IUserSignInRequest } from '../types/types';
import axios from 'axios';
import '../styles/signInModal.css';

interface SignInModalProps {
	signIn: boolean;
	signInHandler: () => void;
  signUpHandler: () => void;
}

const validationSchema: yup.ObjectSchema<IUserSignInRequest> = yup
	.object()
	.shape({
		email: yup
			.string()
			.email('Почта должна быть корректной')
			.required('Введите почту')
			.max(150, 'Почта слишком длинная')
			.min(3, 'Почта слишком короткая'),
		password: yup
			.string()
			.required('Введите пароль')
			.min(6, 'Пароль слишком короткий')
			.max(100, 'Пароль слишком длинный'),
		remember: yup.boolean().required(),
	});

const SignInModal: FC<SignInModalProps> = ({ signIn, signInHandler, signUpHandler }) => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			remember: false,
		},
		validationSchema,
		onSubmit: async (values: IUserSignInRequest) => {
			try {
				const response = await axios.post(
					'http://hz.axgrid.com:8094/api/v1/signin',
					values
				);
				console.log(`RESPONSE: ${response}`);
			} catch (err) {
				console.error(`ERROR: ${err}`);
			}
		},
	});

	return (
		<>
			{signIn && <div className='modal-backdrop-blur' />}
			<Modal show={signIn} onHide={signInHandler} centered>
				<div className='formCircle'>
					<i className='bi bi-person'></i>
				</div>
				<Modal.Body>
					<div className='modalHeader'>
						<p className='modal-title'>Войти в аккаунт</p>
						<p>войдите в личный кабинет</p>
					</div>
					<div className='inputs'>
						<Form onSubmit={formik.handleSubmit}>
							<div className='input-wrapper'>
								<Form.Control
									name='email'
									placeholder='Введите ваш email'
									className={`custom-form-control ${
										formik.touched.email && formik.errors.email
											? 'is-invalid'
											: ''
									}`}
									required
									value={formik.values.email}
									onChange={formik.handleChange}
								/>
								<i className='bi bi-envelope-at'></i>
							</div>
							<div className='input-wrapper'>
								<Form.Control
									name='password'
									placeholder='Пароль'
									type='password'
									className={`custom-form-control ${
										formik.touched.password && formik.errors.password
											? 'is-invalid'
											: ''
									}`}
									required
									value={formik.values.password}
									onChange={formik.handleChange}
								/>
								<i className='bi bi-eye-slash'></i>
							</div>
							<Form.Control.Feedback type='invalid' tooltip>
								{formik.errors.email}
								{formik.errors.email && formik.errors.password && ' и '}
								{formik.errors.password}
							</Form.Control.Feedback>
							<Button type='submit' className='custom-button'>
								Войти
							</Button>
						</Form>
					</div>
					<div className='registrationLink'>
						<p>Нет аккаунта?</p>
            <a href='#registration' onClick={() => { signUpHandler(); signInHandler(); }}>Зарегистрироваться</a>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default SignInModal;
