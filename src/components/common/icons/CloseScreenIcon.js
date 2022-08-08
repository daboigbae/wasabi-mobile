import React from "react";
import PropTypes from "prop-types";

import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOR_PALETTE } from "../../../utils/constants";

const CloseScreenIcon = ({ onPress }) => (
	<Pressable className="pl-2" onPress={onPress}>
		<Icon name="close" color={COLOR_PALETTE.white} size={32} className="mr-4" />
	</Pressable>
);

CloseScreenIcon.propTypes = {
	onPress: PropTypes.func.isRequired
};

export default CloseScreenIcon;
