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
				dispatch(setUserInformation(user?.user));
				navigation.replace(NAVIGATORS.LANDING);
			}
			setIsLoading(false);
		});
	};

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView className="flex-1 w-full">
				<View className="flex-1 w-full items-center pt-[10%] pb-[10%]">
					<LottieView
						source={require("../../assets/lottie/signInAnimation.json")}
						className="w-1/2"
						autoPlay
						loop
					/>
					<Text className="text-white text-5xl font-bold">Wasabi Music</Text>
					<Text className="text-white text-xl width-[85%] text-center font-light mb-4">
						Music NFTs
					</Text>
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
						style={"mt-5"}
						textStyle={"text-blue-500 font-bold mt-4"}
						type={BUTTON_TYPES.TEXT}
						idDisabled={isLoading}
					/>

					<Button
						text="Create an account"
						onPress={() => navigation.push(USER_AUTH_SCREENS.SIGN_UP_SCREEN)}
						style={"mt-6 font-bold"}
						textStyle={"text-blue-500 font-bold mt-4"}
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
