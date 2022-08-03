export const coverImage =
	"https://firebasestorage.googleapis.com/v0/b/web3-bots.appspot.com/o/PNG%20image-E94F3F952DB8-1.png?alt=media&token=a5d4c96d-2e77-46fd-90d6-fa9b5db8c59d";

export const NAVIGATORS = {
	MAIN: "Main",
	USER_AUTH: "User Authentication",
	LANDING: "Landing"
};

export const MAIN_SCREENS = {
	HOME_STACK_SCREEN: "home",
	LIBRARY_SCREEN: "Library"
};

export const HOME_SCREENS = {
	HOME_SCREEN: "Home",
	PLAYLIST_SCREEN: "Playlist"
};

export const icons = {
	pause: "pause-circle",
	play: "play-circle",
	back: "step-backward",
	forward: "step-forward"
};

export const USER_AUTH_SCREENS = {
	SIGN_IN_SCREEN: "Sign In",
	SIGN_UP_SCREEN: "Sign Up",
	FORGOT_PASSWORD_SCREEN: "Reset Password"
};

export const COLOR_PALETTE = {
	dark: {
		primary: "#13131d",
		secondary: "#1f1f32"
	},
	purple: "#B026FF",
	textlight: "#ffffff",
	lightblue: "#1890ff",
	lightgray: "#868686",
	shadow: "#000000",
	white: "#fff",
	red100: "#dc143c"
};

export const SIGN_IN_FORM_INPUTS_ARRAY = [
	{
		name: "Email",
		value: "email",
		rules: { required: "Email is required" }
	},
	{
		name: "Password",
		value: "password",
		rules: { required: "Password is required" }
	}
];

export const FORGOT_PASSWORD_INPUTS_ARRAY = [
	{
		name: "Email",
		value: "email",
		rules: { required: "Email is required" }
	}
];

export const FIREBASE_ERROR_CODES = {
	WRONG_PASSWORD: "auth/wrong-password",
	INVALID_EMAIL: "auth/invalid-email",
	EMAIL_EXISTS: "auth/email-already-in-use",
	WEAK_PASSWORD: "auth/weak-password",
	REQUIRES_RECENT_LOGIN: "auth/requires-recent-login"
};

export const DEFAULT_FORM_VALUES = {
	SIGN_IN: {
		email: "",
		password: ""
	},
	SIGN_UP: {
		email: "",
		password: ""
	},
	FORGOT_PASSWORD: {
		email: ""
	}
};
