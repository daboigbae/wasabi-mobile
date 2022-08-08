import React from "react";
import PropTypes from "prop-types";

import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOR_PALETTE, NAVIGATORS } from "../../../utils/constants";

const SignInIcon = ({ navigation }) => (
	<Pressable
		className="mr-2"
		onPress={() => navigation.replace(NAVIGATORS.USER_AUTH)}
	>
		<Icon
			name="card-account-details-star"
			color={COLOR_PALETTE.white}
			size={32}
		/>
	</Pressable>
);

SignInIcon.propTypes = {
	navigation: PropTypes.object
};

export default SignInIcon;
