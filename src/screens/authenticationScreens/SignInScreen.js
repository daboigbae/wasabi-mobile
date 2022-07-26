import React, { useState } from "react";
import PropTypes from "prop-types";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../utils/GlobalStyles";
import {
	COLOR_PALETTE,
	NAVIGATORS,
	SIGN_IN_FORM_INPUTS_ARRAY,
	USER_AUTH_SCREENS
} from "../../utils/constants";
import Form from "../../components/common/form/Form";
import Button, { BUTTON_TYPES } from "../../components/common/Button";
import { handleSignIn } from "../../utils/firebase";

const SignInScreen = ({ navigation }) => {
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data) => {
		setIsLoading(true);
		await handleSignIn(data);
		navigation.replace(NAVIGATORS.MAIN);
	};

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.container}>
					<Text style={styles.title}>Wasabi Music</Text>
					<Text style={styles.funText}>
						Login to get the full Wasabi Experience, and support your favorite
						NFT artists
					</Text>
					<Form
						inputs={SIGN_IN_FORM_INPUTS_ARRAY}
						defaultValues={{
							email: "",
							password: ""
						}}
						onSubmit={onSubmit}
						isLoading={isLoading}
						buttonText="Sign In"
					/>
					<Button
						text="Sign Up"
						onPress={() =>
							navigation.navigate(USER_AUTH_SCREENS.SIGN_UP_SCREEN)
						}
						style={styles.textButton}
						textStyle={styles.textButtonText}
						type={BUTTON_TYPES.TEXT}
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
		width: "100%",
		paddingTop: "20%"
	},
	container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center"
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
		borderWidth: 2,
		borderColor: COLOR_PALETTE.lightblue,
		borderRadius: 8,
		marginTop: 16
	},

	textButtonText: {
		color: COLOR_PALETTE.lightblue,
		fontWeight: "bold"
	}
});
