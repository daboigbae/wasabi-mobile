import React from "react";
import PropTypes from "prop-types";

import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLOR_PALETTE } from "../../../utils/constants";

const MoreIcon = ({ onPress }) => (
	<Pressable onPress={onPress}>
		<Icon name="more-horiz" color={COLOR_PALETTE.white} size={32} />
	</Pressable>
);

MoreIcon.propTypes = {
	navigation: PropTypes.object,
	onPress: PropTypes.func
};

export default MoreIcon;
