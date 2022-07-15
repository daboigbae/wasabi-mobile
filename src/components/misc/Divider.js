import React from "react";
import { View, StyleSheet } from "react-native";
import { COLOR_PALETTE } from "../../utils/constants";

const Divider = () => {
	return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
	divider: {
		marginTop: 16,
		width: "100%",
		height: 1,
		backgroundColor: COLOR_PALETTE.lightgray
	}
});
