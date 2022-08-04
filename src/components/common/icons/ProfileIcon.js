import React from "react";

import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import PropTypes from "prop-types";

import { COLOR_PALETTE, NAVIGATORS } from "../../../utils/constants";

const ProfileIcon = ({ navigation }) => {
	const onPress = async () => {
		await navigation.push(NAVIGATORS.USER_PROFILE);
	};

	return (
		<Pressable onPress={onPress}>
			<Icon
				name="user-circle"
				color={COLOR_PALETTE.white}
				size={32}
				style={styles.icon}
			/>
		</Pressable>
	);
};

ProfileIcon.propTypes = {
	navigation: PropTypes.object
};

export default ProfileIcon;

const styles = StyleSheet.create({
	icon: {
		marginRight: 16
	}
});
