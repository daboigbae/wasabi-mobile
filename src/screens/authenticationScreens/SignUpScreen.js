import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import GlobalStyles from "../../utils/GlobalStyles";
import {
	COLOR_PALETTE,
	NAVIGATORS,
	SIGN_IN_FORM_INPUTS_ARRAY
} from "../../utils/constants";
import Form from "../../components/common/form/Form";
import { handleSignUp } from "../../utils/firebase";

const SignUpScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data) => {
		setIsLoading(true);
		await handleSignUp(data, dispatch);
		navigation.replace(NAVIGATORS.MAIN);
		setIsLoading(false);
	};
	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.container}>
					<Text style={styles.title}>Wasabi Music</Text>
					<Text style={styles.funText}>
						Sign up to create an account and start tracking the NFT music you
						listen to.
					</Text>
					<Form
						inputs={SIGN_IN_FORM_INPUTS_ARRAY}
						defaultValues={{
							email: "",
							password: ""
						}}
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
	}
});
