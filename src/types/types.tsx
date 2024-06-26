export interface IUserProfile {
	email: string;
	id: string;
	language: string;
	name: string;
	time_zone: string;
}

export interface IUserSignUpRequest extends Omit<IUserProfile, 'id'> {
	password: string;
}

export interface IUserSignInRequest
	extends Pick<IUserSignUpRequest, 'email' | 'password'> {
	remember: boolean;
}
