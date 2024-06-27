import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileComponent from './MobileComponent';
import DesktopComponent from './DesktopComponent';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModel';
import MobileMenu from './MobileMenu';

const App: React.FC = () => {
	const isDesktop = useMediaQuery({ query: '(min-width: 800px)' });

	const [signIn, setSignInModal] = useState<boolean>(false);
	const [signUp, setSignUpModal] = useState<boolean>(false);
	const [menuOn, setMenu] = useState<boolean>(false);

	const signInHandler = (): void => setSignInModal(!signIn);
	const signUpHandler = (): void => setSignUpModal(!signUp);
	const menuHandler = (): void => setMenu(!menuOn);

	return (
		<div className='App'>
			<div className='wrapper-background'>
				{menuOn && (
					<MobileMenu
						menuOn={menuOn}
						menuHandler={menuHandler}
						signInHandler={signInHandler}
					/>
				)}
				{signIn && (
					<SignInModal
						signIn={signIn}
						signInHandler={signInHandler}
						signUpHandler={signUpHandler}
					/>
				)}
				{signUp && (
					<SignUpModal
						signUp={signUp}
						signInHandler={signInHandler}
						signUpHandler={signUpHandler}
					/>
				)}
				{isDesktop ? (
					<DesktopComponent signInHandler={signInHandler} />
				) : (
					<MobileComponent menuHandler={menuHandler} />
				)}
			</div>
		</div>
	);
};

export default App;
