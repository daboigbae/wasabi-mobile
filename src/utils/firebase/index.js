import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import { setUser } from "../../redux/UserSlice";
import { FIREBASE_ERROR_CODES } from "../constants";

export const getFirebaseUser = () => auth()?.currentUser;

export const handleSignUp = async (data, dispatch) => {
	const { email, password } = data;
	try {
		const user = await auth().createUserWithEmailAndPassword(email, password);
		await dispatch(setUser(user));
	} catch (error) {
		if (error.code === FIREBASE_ERROR_CODES.INVALID_EMAIL)
			return Alert.alert("Please use a valid email address");

		if (error.code === FIREBASE_ERROR_CODES.EMAIL_EXISTS)
			return Alert.alert("Email already exists");

		if (error.code === FIREBASE_ERROR_CODES.WEAK_PASSWORD)
			return Alert.alert("Weak Password. Please use at least 6 characters");

		return Alert.alert("Something went wrong, please contact support");
	}
};

export const handleSignIn = async (data) => {
	const { email, password } = data;
	try {
		await auth().signInWithEmailAndPassword(email, password);
	} catch (error) {
		if (error.code === FIREBASE_ERROR_CODES.WRONG_PASSWORD || error.code)
			return Alert.alert("Password does not match email");
		if (error.code === FIREBASE_ERROR_CODES.INVALID_EMAIL)
			return Alert.alert("Invalid email address, please use a different one");
		return Alert.alert("Something went wrong, please contact support");
	}
};

export const handleSignOut = async (dispatch) => {
	try {
		await auth().signOut();
		const anonymousUser = await auth().signInAnonymously();
		await dispatch(setUser(anonymousUser));
		Alert.alert("Singed out!");
	} catch (error) {
		Alert.alert("Something went wrong, please contact support");
	}
};