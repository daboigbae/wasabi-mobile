import React from "react";
import { Dimensions } from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/FontAwesome";
import FastImage from "react-native-fast-image";

import { COLOR_PALETTE } from "../../utils/constants";

const width = Dimensions.get("window").width;

const UserProfileAvatar = ({ avatar }) => {
	return !avatar ? (
		<Icon name="user-circle" size={width * 0.55} color={COLOR_PALETTE.white} />
	) : (
		<FastImage
			className="h-48 w-48 rounded-full"
			source={{
				uri: avatar && avatar
			}}
			resizeMode={FastImage.resizeMode.cover}
		/>
	);
};

UserProfileAvatar.propTypes = {
	avatar: PropTypes.string
};
export default UserProfileAvatar;
