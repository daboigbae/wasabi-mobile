import React from "react";
import { StyleSheet, View, TextInput, PixelRatio } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { connectSearchBox } from "react-instantsearch-native";

import PropTypes from "prop-types";
import { COLOR_PALETTE } from "../../utils/constants";

const SearchBox = ({ currentRefinement, refine }) => {
	return (
		<View style={styles.container}>
			<View style={styles.iconContainer}>
				<Icon
					style={styles.searchIcon}
					name="search"
					size={20}
					color={COLOR_PALETTE.white}
				/>
			</View>
			<TextInput
				style={styles.input}
				onChangeText={(value) => refine(value)}
				value={currentRefinement}
				placeholder="Search"
				placeholderTextColor={COLOR_PALETTE.white}
			/>
		</View>
	);
};

SearchBox.propTypes = {
	currentRefinement: PropTypes.string.isRequired,
	refine: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
	container: {
		padding: 16,
		flexDirection: "row",
		width: "100%",
		alignItems: "center"
	},
	iconContainer: {
		width: "10%",
		height: 50,
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
		backgroundColor: "#212133",
		justifyContent: "center",
		alignItems: "flex-end"
	},
	input: {
		padding: 12,
		fontSize: 16 * PixelRatio.getFontScale(),
		height: 50,
		backgroundColor: "#212133",
		borderTopRightRadius: 8,
		borderBottomRightRadius: 8,
		shadowRadius: 4,
		width: "90%",
		color: "white"
	}
});

export default connectSearchBox(SearchBox);
