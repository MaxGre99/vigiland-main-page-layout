import React, { FC } from 'react';
import {
	Container,
	Nav,
	Navbar,
	NavDropdown,
	Button,
	Row,
	Col,
} from 'react-bootstrap';
// import axios from 'axios';
import '../styles/desktopComponent.css';
import logo from '../assets/logo_vigiland.svg';

interface IDesktopComponentProps {
	signInHandler: () => void;
}

const DesktopComponent: FC<IDesktopComponentProps> = ({ signInHandler }) => {
	return (
			<Container className='mainContainer'>
				<header>
					<Navbar expand='lg'>
						<div className='header'>
							<Navbar.Toggle aria-controls='basic-navbar-nav' className='navbar-toggle-custom' />
							<Navbar.Brand href='#home' className='logo'>
								<img src={logo} alt='Logo' />
								<span>Vigiland</span>
							</Navbar.Brand>
							<Navbar.Collapse id='basic-navbar-nav'>
								<Nav className='links'>
									<Nav.Link href='#about'>О проекте</Nav.Link>
									<Nav.Link href='#tokenomics'>Токеномика и NFT</Nav.Link>
									<Nav.Link href='#roadmap'>Roadmap</Nav.Link>
									<Nav.Link href='#docs'>Документы</Nav.Link>
								</Nav>
								<Nav className='signUpAndLang'>
									<Button
										className='d-flex signUpButton gradient-button'
										variant='light'
										onClick={signInHandler}>
										<i className='bi bi-person'></i>
										<span className='signUpText'>Вход | Регистрация</span>
									</Button>
									<div className='vr ms-4' />
									<NavDropdown title='RU' id='basic-nav-dropdown'>
										<NavDropdown.Item href='#action/3.1'>RU</NavDropdown.Item>
										<NavDropdown.Item href='#action/3.2'>ENG</NavDropdown.Item>
										<NavDropdown.Item href='#action/3.3'>CN</NavDropdown.Item>
									</NavDropdown>
								</Nav>
							</Navbar.Collapse>
						</div>
					</Navbar>
				</header>
				<main>
					<Container>
						<Row>
							<Col lg={6} className='d-flex description'>
								<h6>NFT ПРОЕКТ</h6>
								<p className='title'>Будущее инвестиций в недвижимость</p>
								<p>
									Мы делаем инвестиции в недвижимость в Европе безопасными,
									прозрачными и доступными для всех
								</p>
								<div className='d-flex'>
									<Button className='buyBtn'>
										<span>Купить недвижимость</span>
									</Button>
									<Button
										variant='transparent'
										className='videoInfoButton d-flex'>
										<i className='bi bi-play-circle'></i>
										<span className='videoInfoText'>КАК ЭТО РАБОТАЕТ?</span>
									</Button>
								</div>
							</Col>
						</Row>
					</Container>
				</main>
			</Container>
	);
};

export default DesktopComponent;
