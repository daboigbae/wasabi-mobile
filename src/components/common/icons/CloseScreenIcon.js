import React from "react";
import PropTypes from "prop-types";

import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOR_PALETTE } from "../../../utils/constants";

const CloseScreenIcon = ({ onPress }) => (
	<Pressable style={styles.container} onPress={onPress}>
		<Icon
			name="close"
			color={COLOR_PALETTE.white}
			size={32}
			style={styles.icon}
		/>
	</Pressable>
);

CloseScreenIcon.propTypes = {
	onPress: PropTypes.func
};

export default CloseScreenIcon;

const styles = StyleSheet.create({
	container: { paddingLeft: 8 },
	icon: {
		marginRight: 16
	}
});
