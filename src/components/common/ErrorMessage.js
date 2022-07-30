import React from "react";
import { Text, View, StyleSheet } from "react-native";

import PropTypes from "prop-types";
import { COLOR_PALETTE } from "../../utils/constants";

const ErrorMessage = ({ message }) => (
	<View style={styles.error}>
		<Text style={styles.errorMessage}>{message}</Text>
	</View>
);

ErrorMessage.propTypes = {
	message: PropTypes.string
};

const styles = StyleSheet.create({
	error: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 12
	},

	errorMessage: {
		color: COLOR_PALETTE.red100
	}
});

export default ErrorMessage;
