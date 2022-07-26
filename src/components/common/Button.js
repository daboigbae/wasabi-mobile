import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/MaterialIcons";
import { COLOR_PALETTE } from "../../utils/constants";

export const BUTTON_TYPES = {
	PRIMARY: "primary",
	TEXT: "text"
};
const Button = ({
	text,
	onPress,
	style = {},
	textStyle = {},
	buttonTestID,
	icon,
	type = BUTTON_TYPES.PRIMARY
}) => {
	const getStyleForButtonType = () =>
		type === BUTTON_TYPES.PRIMARY ? styles.primaryButton : {};

	return (
		<Pressable
			style={{ ...styles.button, ...getStyleForButtonType(), ...style }}
			onPress={onPress}
			testID={buttonTestID}
		>
			{icon && (
				<View style={styles.iconContainer}>
					<Icon
						name={icon}
						color={COLOR_PALETTE.red500}
						style={styles.icon}
						size={32}
					/>
				</View>
			)}
			<Text style={{ ...styles.title, ...textStyle }}>{text}</Text>
		</Pressable>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	style: PropTypes.object,
	textStyle: PropTypes.object,
	buttonTestID: PropTypes.string,
	icon: PropTypes.string,
	type: PropTypes.string
};

export default Button;

const styles = StyleSheet.create({
	iconContainer: {
		justifyContent: "center",
		alignItems: "center",
		width: 32,
		height: 32,
		position: "absolute",
		left: 16
	},
	button: {
		width: "80%",
		height: 52,
		justifyContent: "center",
		alignItems: "center",
		display: "flex"
	},
	primaryButton: {
		backgroundColor: COLOR_PALETTE.lightblue,
		borderRadius: 8
	},
	title: {
		width: "80%",
		textAlign: "center",
		fontSize: 16,
		color: COLOR_PALETTE.blue500
	},
	icon: {
		color: "red"
	}
});
