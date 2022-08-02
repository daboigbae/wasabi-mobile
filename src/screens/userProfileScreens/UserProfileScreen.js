import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import GlobalStyles from "../../utils/GlobalStyles";
import { COLOR_PALETTE } from "../../utils/constants";

const UserProfileScreen = () => {
	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<View style={styles.container}>
				<Text style={styles.text}>User Profile</Text>
			</View>
		</SafeAreaView>
	);
};

export default UserProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		color: COLOR_PALETTE.white
	}
});
