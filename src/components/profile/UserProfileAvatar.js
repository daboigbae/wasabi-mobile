import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { COLOR_PALETTE } from "../../utils/constants";

const width = Dimensions.get("window").width;

const UserProfileAvatar = () => {
	const avatar = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.avatar
	);

	return !avatar ? (
		<Icon name="user-circle" size={width / 2.5} color={COLOR_PALETTE.white} />
	) : (
		<Image resizeMethod="cover" style={styles.avatar} />
	);
};

export default UserProfileAvatar;

const styles = StyleSheet.create({
	avatar: {
		width: width / 2.5,
		height: width / 2.5,
		backgroundColor: "yellow",
		borderRadius: 100
	}
});
