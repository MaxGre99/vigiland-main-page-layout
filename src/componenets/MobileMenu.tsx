import React, { FC } from 'react';
import { Modal, Nav, Button } from 'react-bootstrap';
import '../styles/mobileComponent.css'

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
		<div className='modal-backdrop-blur d-flex'>
					<Nav className='links'>
						<Button type='button' variant='transparent' onClick={menuHandler} className='menuCloseBtn'>x</Button>
						<Nav.Link href='#about'>О проекте</Nav.Link>
						<Nav.Link href='#tokenomics'>Токеномика и NFT</Nav.Link>
						<Nav.Link href='#roadmap'>Roadmap</Nav.Link>
						<Nav.Link href='#docs'>Документы</Nav.Link>
					</Nav>
					<Button
						className='d-flex signUpButton transparent-button'
						variant='light'
						onClick={signInHandler}>
						<i className='bi bi-person'></i>
						<span className='signUpText'>Войти в кабинет</span>
					</Button>
		</div>
	);
};

export default MobileMenu;
