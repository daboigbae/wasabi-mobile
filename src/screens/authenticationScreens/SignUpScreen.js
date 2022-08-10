import React, { useEffect, useState } from "react";
import {
	BackHandler,
	SafeAreaView,
	ScrollView,
	Text,
	View
} from "react-native";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import LottieView from "lottie-react-native";

import GlobalStyles from "../../utils/GlobalStyles";
import {
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

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => {
				navigation.goBack();
				return true;
			}
		);

		return () => backHandler.remove();
	}, []);

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
		<SafeAreaView className="w-full h-full" style={GlobalStyles.appView}>
			<ScrollView className="flex-1 w-full">
				<View className="flex-1 w-full items-center pt-[10%]">
					<LottieView
						source={require("../../assets/lottie/signUpAnimation.json")}
						className="w-1/2"
						autoPlay
						loop
					/>
					<Text className="text-white text-4xl font-bold">Start Listening</Text>
					<Text className="text-white text-base w-[85%] text-center font-light my-2">
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
