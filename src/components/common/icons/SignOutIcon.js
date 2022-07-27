import { StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOR_PALETTE } from "../../../utils/constants";

const SignOutIcon = () => {
	return (
		<Icon
			name="logout"
			color={COLOR_PALETTE.white}
			size={32}
			style={styles.icon}
		/>
	);
};

export default SignOutIcon;

const styles = StyleSheet.create({
	icon: {
		marginRight: 16
	}
});
