import { Pressable, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOR_PALETTE, NAVIGATORS } from "../../../utils/constants";
import { handleSignOut } from "../../../utils/firebase";

const SignOutIcon = ({ navigation }) => {
	const onPress = async () => {
		await handleSignOut(() => navigation.navigate(NAVIGATORS.MAIN));
	};

	return (
		<Pressable onPress={onPress}>
			<Icon
				name="logout"
				color={COLOR_PALETTE.white}
				size={32}
				style={styles.icon}
			/>
		</Pressable>
	);
};

SignOutIcon.propTypes = {
	navigation: SignOutIcon.object
};

export default SignOutIcon;

const styles = StyleSheet.create({
	icon: {
		marginRight: 16
	}
});
