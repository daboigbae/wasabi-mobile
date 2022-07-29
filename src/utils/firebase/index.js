import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

import { FIREBASE_ERROR_CODES } from "../constants";

export const getFirebaseUser = () => auth()?.currentUser;

export const handleSignUp = async (data) => {
	const { email, password } = data;
	try {
		const user = await auth().createUserWithEmailAndPassword(email, password);
		return user;
	} catch (error) {
		if (error.code === FIREBASE_ERROR_CODES.INVALID_EMAIL)
			Alert.alert("Please use a valid email address");

		if (error.code === FIREBASE_ERROR_CODES.EMAIL_EXISTS)
			Alert.alert("Email already exists");

		if (error.code === FIREBASE_ERROR_CODES.WEAK_PASSWORD)
			Alert.alert("Weak Password. Please use at least 6 characters");

		return null;
	}
};

export const handleSignIn = async (data, callback) => {
	const { email, password } = data;
	try {
		const user = await auth().signInWithEmailAndPassword(email, password);
		callback && callback(user);
	} catch (error) {
		if (error.code === FIREBASE_ERROR_CODES.WRONG_PASSWORD || error.code)
			Alert.alert("Password does not match email");
		if (error.code === FIREBASE_ERROR_CODES.INVALID_EMAIL)
			Alert.alert("Invalid email address, please use a different one");
		return null;
	}
};

export const handleSignOut = async (callback) => {
	try {
		await auth().signOut();
		callback && callback();
	} catch (error) {
		callback && callback();
		Alert.alert("Something went wrong, please contact support");
	}
};
