import React from "react";

import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import PropTypes from "prop-types";

import { COLOR_PALETTE, NAVIGATORS } from "../../../utils/constants";

const ProfileIcon = ({ navigation }) => {
	const onPress = async () => {
		await navigation.push(NAVIGATORS.USER_PROFILE);
	};

	return (
		<Pressable className="mr-4 mb-2" onPress={onPress}>
			<Icon name="user-circle" color={COLOR_PALETTE.white} size={24} />
		</Pressable>
	);
};

ProfileIcon.propTypes = {
	navigation: PropTypes.object
};

export default ProfileIcon;
