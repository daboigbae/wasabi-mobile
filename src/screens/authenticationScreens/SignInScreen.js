import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../../utils/GlobalStyles";
import {
	COLOR_PALETTE,
	SIGN_IN_FORM_INPUTS_ARRAY
} from "../../utils/constants";
import Form from "../../components/common/form/Form";

const SignInScreen = () => {
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = () => {
		setIsLoading(true);
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
				</View>
			</ScrollView>
		</SafeAreaView>
	);
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
	}
});
