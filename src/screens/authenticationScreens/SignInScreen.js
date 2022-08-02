import React, { useEffect, useState } from "react";
import {
	BackHandler,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from "react-native";
import LottieView from "lottie-react-native";
import PropTypes from "prop-types";

import GlobalStyles from "../../utils/GlobalStyles";
import {
	COLOR_PALETTE,
	NAVIGATORS,
	DEFAULT_FORM_VALUES,
	SIGN_IN_FORM_INPUTS_ARRAY,
	USER_AUTH_SCREENS
} from "../../utils/constants";

import Form from "../../components/common/form/Form";
import Button, { BUTTON_TYPES } from "../../components/common/Button";
import { handleSignIn } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { setUserInformation } from "../../redux/UserSlice";

const SignInScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => {
				navigation.replace(NAVIGATORS.LANDING);
				return true;
			}
		);

		return () => backHandler.remove();
	}, []);

	const onSubmit = async (data) => {
		setIsLoading(true);
		await handleSignIn(data, (user) => {
			if (user) {
				dispatch(setUserInformation(user));
				navigation.replace(NAVIGATORS.LANDING);
			}
			setIsLoading(false);
		});
	};

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.container}>
					<LottieView
						source={require("../../assets/lottie/signInAnimation.json")}
						style={styles.lottie}
						autoPlay
						loop
					/>
					<Text style={styles.title}>Wasabi Music</Text>
					<Text style={styles.funText}>Music NFTs</Text>
					<Form
						inputs={SIGN_IN_FORM_INPUTS_ARRAY}
						defaultValues={DEFAULT_FORM_VALUES.SIGN_IN}
						onSubmit={onSubmit}
						isLoading={isLoading}
						buttonText="Sign In"
					/>

					<Button
						text="Forgot Password?"
						onPress={() =>
							navigation.push(USER_AUTH_SCREENS.FORGOT_PASSWORD_SCREEN)
						}
						style={styles.textButton}
						textStyle={styles.textButtonText}
						type={BUTTON_TYPES.TEXT}
						idDisabled={isLoading}
					/>

					<Button
						text="Create an account"
						onPress={() => navigation.push(USER_AUTH_SCREENS.SIGN_UP_SCREEN)}
						style={styles.createAccountButton}
						textStyle={styles.textButtonText}
						type={BUTTON_TYPES.TEXT}
						isDisabled={isLoading}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

SignInScreen.propTypes = {
	navigation: PropTypes.object
};

export default SignInScreen;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		width: "100%"
	},
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		paddingTop: "10%",
		paddingBottom: "10%"
	},
	title: {
		color: COLOR_PALETTE.white,
		fontSize: 40,
		fontWeight: "bold"
	},
	funText: {
		color: COLOR_PALETTE.white,
		fontSize: 16,
		width: "85%",
		textAlign: "center",
		fontWeight: "300",
		marginBottom: 16
	},
	textButton: {
		marginTop: 32
	},

	textButtonText: {
		color: COLOR_PALETTE.lightblue,
		fontWeight: "bold",
		marginTop: 8
	},
	createAccountButton: {
		color: COLOR_PALETTE.lightblue,
		fontWeight: "bold",
		marginTop: 48
	},
	lottie: { width: "50%" }
});
