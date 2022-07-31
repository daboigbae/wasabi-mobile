import React from "react";
import PropTypes from "prop-types";

import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLOR_PALETTE, NAVIGATORS } from "../../../utils/constants";

const CloseScreenIcon = ({ navigation }) => (
	<Pressable
		style={styles.container}
		onPress={() => navigation.replace(NAVIGATORS.LANDING)}
	>
		<Icon
			name="close"
			color={COLOR_PALETTE.white}
			size={32}
			style={styles.icon}
		/>
	</Pressable>
);

CloseScreenIcon.propTypes = {
	navigation: PropTypes.object
};

export default CloseScreenIcon;

const styles = StyleSheet.create({
	container: { paddingLeft: 8 },
	icon: {
		marginRight: 16
	}
});
