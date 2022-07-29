import React from "react";

import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOR_PALETTE, NAVIGATORS } from "../../../utils/constants";

const SignInIcon = ({ navigation }) => {
	const onPress = () => navigation.navigate(NAVIGATORS.USER_AUTH);
	return (
		<Pressable onPress={onPress}>
			<Icon
				name="card-account-details-star"
				color={COLOR_PALETTE.white}
				size={32}
				style={styles.icon}
			/>
		</Pressable>
	);
};

SignInIcon.propTypes = {
	navigation: SignInIcon.object
};

export default SignInIcon;

const styles = StyleSheet.create({
	icon: {
		marginRight: 16
	}
});
