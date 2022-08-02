import React, { useState } from "react";
import {
	Alert,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from "react-native";
import PropTypes from "prop-types";
import LottieView from "lottie-react-native";

import {
	COLOR_PALETTE,
	DEFAULT_FORM_VALUES,
	FORGOT_PASSWORD_INPUTS_ARRAY
} from "../../utils/constants";
import Form from "../../components/common/form/Form";
import GlobalStyles from "../../utils/GlobalStyles";
import { handleForgotPassword } from "../../utils/firebase";

const ForgotPasswordScreen = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data) => {
		setIsLoading(true);
		await handleForgotPassword(data, () => {
			Alert.alert(
				"Password Reset",
				"Link to reset password has been sent to your email"
			);
			navigation.goBack();
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
					<Text style={styles.funText}>
						Enter your email to reset your password
					</Text>
					<Form
						inputs={FORGOT_PASSWORD_INPUTS_ARRAY}
						defaultValues={DEFAULT_FORM_VALUES.FORGOT_PASSWORD}
						onSubmit={onSubmit}
						isLoading={isLoading}
						buttonText="Sign In"
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

ForgotPasswordScreen.propTypes = {
	navigation: PropTypes.object
};

export default ForgotPasswordScreen;

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
	lottie: { width: "50%" }
});
