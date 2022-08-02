import React from "react";
import {
	StyleSheet,
	Text,
	Pressable,
	View,
	ActivityIndicator,
	PixelRatio
} from "react-native";

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
	type = BUTTON_TYPES.PRIMARY,
	isLoading = false,
	isDisabled = false
}) => {
	const renderLoadingComponent = () => (
		<ActivityIndicator
			style={styles.loader}
			size="small"
			color={COLOR_PALETTE.white}
		/>
	);

	const renderButtonContent = () => (
		<>
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
		</>
	);

	return (
		<Pressable
			style={getStyleForButton(type, style)}
			onPress={onPress}
			testID={buttonTestID}
			disabled={isLoading || isDisabled}
		>
			{isLoading ? renderLoadingComponent() : renderButtonContent()}
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
	type: PropTypes.string,
	isLoading: PropTypes.bool,
	isDisabled: PropTypes.bool
};

export default Button;

const getStyleForButton = (type, style) => {
	let styleForButtonType = {};

	if (type === BUTTON_TYPES.PRIMARY) {
		styleForButtonType = {
			...styles.button
		};
	}
	return { ...styleForButtonType, ...style };
};

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
		display: "flex",
		borderRadius: 4
	},
	primaryButton: {
		backgroundColor: COLOR_PALETTE.lightblue,
		borderRadius: 8
	},
	title: {
		width: "80%",
		textAlign: "center",
		fontSize: 16 * PixelRatio.getFontScale(),
		color: COLOR_PALETTE.blue500
	},
	icon: {
		color: "red"
	}
});
