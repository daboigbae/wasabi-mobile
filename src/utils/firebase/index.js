import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import storage from "@react-native-firebase/storage";

import { FIREBASE_ERROR_CODES } from "../constants";
import { setUserInformation } from "../../redux/UserSlice";

export const getFirebaseUser = () => auth()?.currentUser;

export const handleSignUp = async (data, callback) => {
	const { email, password } = data;
	try {
		const user = await auth().createUserWithEmailAndPassword(email, password);
		callback && callback(user);
	} catch (error) {
		if (error.code === FIREBASE_ERROR_CODES.INVALID_EMAIL)
			Alert.alert("Please use a valid email address");

		if (error.code === FIREBASE_ERROR_CODES.EMAIL_EXISTS)
			Alert.alert("Email already exists");

		if (error.code === FIREBASE_ERROR_CODES.WEAK_PASSWORD)
			Alert.alert("Weak Password. Please use at least 6 characters");

		callback && callback(null);
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
		callback && callback(null);
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

export const handleForgotPassword = async (data, callback) => {
	const { email } = data;
	try {
		await auth().sendPasswordResetEmail(email);
		callback && callback();
	} catch (error) {
		Alert.alert(error.message);
	}
};

export const handleUpdateProfile = async (data, callback) => {
	let FIELDS_TO_UPDATE = {
		displayName: data?.username
	};

	if (data?.imagePreview) {
		const uploadUri = data?.imagePreview;
		let filename = uploadUri.substring(uploadUri.lastIndexOf("/") + 1);
		let imageReference = storage().ref(filename);
		try {
			await imageReference.putFile(uploadUri);
			const url = await imageReference.getDownloadURL();
			FIELDS_TO_UPDATE["photoURL"] = url;
		} catch (error) {
			Alert.alert(error.message);
		}
	}

	try {
		await auth().currentUser.updateProfile(FIELDS_TO_UPDATE);

		callback && callback();
	} catch (error) {
		Alert.alert(error);
	}
};

export const getUpdatedUserInformation = async (dispatch) => {
	const user = getFirebaseUser();
	await dispatch(setUserInformation(user));
};
