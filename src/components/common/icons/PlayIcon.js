import React from "react";
import PropTypes from "prop-types";

import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLOR_PALETTE } from "../../../utils/constants";

const PlayIcon = ({ onPress }) => (
	<Pressable onPress={onPress}>
		<Icon name="play-circle-fill" color={COLOR_PALETTE.lightblue} size={64} />
	</Pressable>
);

PlayIcon.propTypes = {
	onPress: PropTypes.func
};

export default PlayIcon;
