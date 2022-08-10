import React from "react";
import { Text, View } from "react-native";

import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => (
	<View className="justify-center items-center mt-3">
		<Text className="text-red-500">{message}</Text>
	</View>
);

ErrorMessage.propTypes = {
	message: PropTypes.string
};

export default ErrorMessage;
