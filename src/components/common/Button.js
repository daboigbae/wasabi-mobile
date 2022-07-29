import React from "react";
import {
	StyleSheet,
	Text,
	Pressable,
	View,
	ActivityIndicator
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
	const getStyleForButton = () => {
		let styleForButtonType = {};

		if (type === BUTTON_TYPES.PRIMARY) {
			styleForButtonType = {
				...styles.button
			};
		}
		return { ...styleForButtonType, ...style };
	};

	const renderLoadingComponent = () => (
		<ActivityIndicator
			style={styles.loader}
			size="large"
			color={COLOR_PALETTE.lightblue}
		/>
	);

	const renderButtonContent = () => (
		<Pressable
			style={getStyleForButton()}
			onPress={onPress}
			testID={buttonTestID}
			disabled={isLoading || isDisabled}
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

	return isLoading ? renderLoadingComponent() : renderButtonContent();
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
	},
	loader: {
		marginTop: 32
	}
});
