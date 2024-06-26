import React, { FC } from 'react';
import { Modal, Nav, Button } from 'react-bootstrap';

interface MobileMenuProps {
	menuOn: boolean;
	menuHandler: () => void;
	signInHandler: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({
	menuOn,
	menuHandler,
	signInHandler,
}) => {
	return (
		<Modal show={menuOn} onHide={menuHandler} fullscreen centered className='modal-backdrop-blur'>
			<Modal.Header closeButton />
			<Modal.Body className='d-flex menuModal'>
				<Nav className='links'>
					<Nav.Link href='#about'>О проекте</Nav.Link>
					<Nav.Link href='#tokenomics'>Токеномика и NFT</Nav.Link>
					<Nav.Link href='#roadmap'>Roadmap</Nav.Link>
					<Nav.Link href='#docs'>Документы</Nav.Link>
				</Nav>
				<Button
					className='d-flex signUpButton gradient-button'
					variant='light'
					onClick={signInHandler}>
					<i className='bi bi-person'></i>
					<span className='signUpText'>Войти в кабинет</span>
				</Button>
			</Modal.Body>
		</Modal>
	);
};

export default MobileMenu;
