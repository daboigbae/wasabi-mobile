import React from "react";
import { Text, Pressable, View, ActivityIndicator } from "react-native";

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
		<ActivityIndicator size="small" color={COLOR_PALETTE.white} />
	);

	const renderButtonContent = () => (
		<>
			{icon && (
				<View className="justify-center items-center w-32 h-32 absolute left-4">
					<Icon name={icon} color={COLOR_PALETTE.red100} size={32} />
				</View>
			)}
			<Text
				className={`w-[80%] text-center text-lg text-blue-500 ${textStyle}`}
			>
				{text}
			</Text>
		</>
	);

	return (
		<Pressable
			className={getStyleForButton(type, style)}
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
		styleForButtonType =
			"w-[80%] h-12 justify-center items-center flex rounded-lg bg-blue-500 ";
	}
	return `${styleForButtonType} ${style}`;
};
