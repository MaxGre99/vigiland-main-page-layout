import React, { FC } from 'react';
import '../styles/mobileComponent.css';
import { Container, Navbar, Button, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo_vigiland.svg';

interface MobileComponentProps {
  menuHandler: () => void;
}

const MobileComponent: FC<MobileComponentProps> = ({ menuHandler }) => {
	return (
			<Container fluid className='mainContainer'>
				<header>
					<Navbar expand='xl' className='d-flex'>
						<Button type='button' variant='transparent' className='menuBtn' onClick={menuHandler}>
							<i className='bi bi-text-left'></i>
						</Button>
						<Navbar.Brand href='#home' className='logo'>
							<img src={logo} alt='Logo' />
							<span>Vigiland</span>
						</Navbar.Brand>
					</Navbar>
				</header>
				<main>
					<Container>
						<Row>
							<Col xs={12} className='d-flex description'>
								<div className='descTexts'>
									<h6>NFT ПРОЕКТ</h6>
									<p className='title'>Будущее инвестиций в недвижимость</p>
									<p>
										Мы делаем инвестиции в недвижимость в Европе безопасными,
										прозрачными и доступными для всех
									</p>
								</div>
								<div className='d-flex descBtns'>
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

export default MobileComponent;
