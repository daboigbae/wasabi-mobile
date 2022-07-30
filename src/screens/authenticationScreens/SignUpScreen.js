import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import LottieView from "lottie-react-native";

import GlobalStyles from "../../utils/GlobalStyles";
import {
	COLOR_PALETTE,
	DEFAULT_FORM_VALUES,
	NAVIGATORS,
	SIGN_IN_FORM_INPUTS_ARRAY
} from "../../utils/constants";
import Form from "../../components/common/form/Form";
import { handleSignUp } from "../../utils/firebase";
import { setUserInformation } from "../../redux/UserSlice";

const SignUpScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data) => {
		setIsLoading(true);
		await handleSignUp(data, (user) => {
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
						source={require("../../assets/lottie/signUpAnimation.json")}
						style={{ width: "50%" }}
						autoPlay
						loop
					/>
					<Text style={styles.title}>Start Listening</Text>
					<Text style={styles.funText}>
						Sign up and create an account to start creating playlists and liking
						your favorite music NFTs.
					</Text>
					<Form
						inputs={SIGN_IN_FORM_INPUTS_ARRAY}
						defaultValues={DEFAULT_FORM_VALUES.SIGN_UP}
						onSubmit={onSubmit}
						isLoading={isLoading}
						buttonText="Sign Up"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

SignUpScreen.propTypes = {
	navigation: PropTypes.object
};

export default SignUpScreen;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		width: "100%"
	},
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		paddingTop: "10%"
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
		marginBottom: 16,
		marginTop: 16
	}
});
