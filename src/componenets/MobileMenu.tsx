import React, { FC, useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import '../styles/mobileComponent.css'

interface MobileMenuProps {
	menuOn: boolean;
	menuHandler: () => void;
	signInHandler: () => void;
}

const sidebarLinks = [{title: 'О проекте', href: '#about'}, {title: 'Токеномика и NFT', href: '#tokenomics'}, {title: 'Roadmap', href: '#roadmap'}, {title: 'Документы', href: '#docs'}];

const MobileMenu: FC<MobileMenuProps> = ({
	menuHandler,
	signInHandler,
}) => {
	const [activeLink, setActiveLink] = useState('#about');

	console.log(window.location.hash);
	
	return (
		<div className='modal-backdrop-blur d-flex'>
					<Nav className='links'>
						<Button type='button' variant='transparent' onClick={menuHandler} className='menuCloseBtn'>x</Button>
						{sidebarLinks.map((link, index) => (
							<Nav.Link key={index} href={link.href} className={`sidebarLink ${activeLink === link.href ? 'active' : ''}`} onClick={() => setActiveLink(link.href)}>{link.title}</Nav.Link>
						))}
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
