import React from "react";

import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import PropTypes from "prop-types";

import { COLOR_PALETTE, NAVIGATORS } from "../../../utils/constants";
import { handleSignOut } from "../../../utils/firebase";
import { useDispatch } from "react-redux";
import { clearUserInformation } from "../../../redux/UserSlice";

const SignOutIcon = ({ navigation }) => {
	const dispatch = useDispatch();
	const onPress = async () => {
		await handleSignOut(() => {
			dispatch(clearUserInformation());
			navigation.pop(); // todo = this is a hack to get the user back to the landing screen, need to investigate
			navigation.replace(NAVIGATORS.LANDING);
		});
	};

	return (
		<Pressable onPress={onPress} className="mr-2">
			<Icon name="logout" color={COLOR_PALETTE.white} size={32} />
		</Pressable>
	);
};

SignOutIcon.propTypes = {
	navigation: PropTypes.object
};

export default SignOutIcon;
