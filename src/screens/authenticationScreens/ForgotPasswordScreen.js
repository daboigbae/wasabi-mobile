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
			<ScrollView className="flex-1 w-full">
				<View className="flex-1 w-full items-center pt-[10%] pb-[10%]">
					<LottieView
						source={require("../../assets/lottie/forgotPasswordAnimation.json")}
						className="w-[50%]"
						autoPlay
						loop
					/>
					<Text className="text-white text-5xl font-bold text-center">
						Wasabi Music
					</Text>
					<Text className="text-white text-lg w-[85%] text-center font-light mb-4">
						Enter your email to reset your password
					</Text>
					<Form
						inputs={FORGOT_PASSWORD_INPUTS_ARRAY}
						defaultValues={DEFAULT_FORM_VALUES.FORGOT_PASSWORD}
						onSubmit={onSubmit}
						isLoading={isLoading}
						buttonText="Send Email"
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
