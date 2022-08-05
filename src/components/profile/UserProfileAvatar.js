import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/FontAwesome";

import { COLOR_PALETTE } from "../../utils/constants";

const width = Dimensions.get("window").width;

const UserProfileAvatar = ({ avatar }) => {
	return !avatar ? (
		<Icon name="user-circle" size={width * 0.4} color={COLOR_PALETTE.white} />
	) : (
		<Image
			style={styles.avatar}
			source={{
				uri: avatar && avatar
			}}
		/>
	);
};

UserProfileAvatar.propTypes = {
	avatar: PropTypes.string
};
export default UserProfileAvatar;

const styles = StyleSheet.create({
	avatar: {
		width: width * 0.4,
		height: width * 0.4,
		borderRadius: 100
	}
});
