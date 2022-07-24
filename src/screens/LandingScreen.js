import React, { useEffect } from "react";
import {
	StyleSheet,
	SafeAreaView,
	ActivityIndicator,
	Text,
	Alert
} from "react-native";

import auth from "@react-native-firebase/auth";
import PropTypes from "prop-types";
import { COLOR_PALETTE, NAVIGATORS } from "../utils/constants";

import GlobalStyles from "../utils/GlobalStyles";

const LandingScreen = ({ navigation }) => {
	const onAuthStateChanged = (user) => {
		if (user) {
			navigation.replace(NAVIGATORS.MAIN);
		} else {
			Alert.alert("Something went wrong please try again");
		}
	};

	useEffect(() => {
		const signInUserAnonymously = async () => {
			await auth().signInAnonymously();
		};

		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		signInUserAnonymously();
		return subscriber;
	}, []);

	return (
		<SafeAreaView
			style={[StyleSheet.absoluteFill, styles.container, GlobalStyles.appView]}
		>
			<Text style={styles.title}>Wasabi Music</Text>
			<ActivityIndicator size="large" color={COLOR_PALETTE.lightgray} />
		</SafeAreaView>
	);
};

LandingScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default LandingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: COLOR_PALETTE.white,
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 16
	}
});
