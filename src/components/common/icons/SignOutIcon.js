import React from "react";

import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import PropTypes from "prop-types";

import { COLOR_PALETTE, NAVIGATORS } from "../../../utils/constants";
import { handleSignOut } from "../../../utils/firebase";
import { clearUserInformation } from "../../../redux/UserSlice";
import { useDispatch } from "react-redux";

const SignOutIcon = ({ navigation }) => {
	const dispatch = useDispatch();

	const onPress = async () => {
		await handleSignOut(() => {
			dispatch(clearUserInformation());
			navigation.replace(NAVIGATORS.MAIN);
		});
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
	navigation: PropTypes.object
};

export default SignOutIcon;

const styles = StyleSheet.create({
	icon: {
		marginRight: 16
	}
});
