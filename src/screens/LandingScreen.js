import React from "react";
import {
	StyleSheet,
	SafeAreaView,
	ActivityIndicator,
	Text
} from "react-native";
import { COLOR_PALETTE } from "../utils/constants";

import GlobalStyles from "../utils/GlobalStyles";

const LandingScreen = () => {
	return (
		<SafeAreaView
			style={[StyleSheet.absoluteFill, styles.container, GlobalStyles.appView]}
		>
			<Text style={styles.title}>Wasabi Music</Text>
			<ActivityIndicator size="large" color={COLOR_PALETTE.lightgray} />
		</SafeAreaView>
	);
};

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

export default LandingScreen;
