import { StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOR_PALETTE } from "../../../utils/constants";

const SignInIcon = () => {
	return (
		<Icon
			name="card-account-details-star"
			color={COLOR_PALETTE.white}
			size={32}
			style={styles.icon}
		/>
	);
};

export default SignInIcon;

const styles = StyleSheet.create({
	icon: {
		marginRight: 16
	}
});
