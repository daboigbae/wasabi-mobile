import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { connectSearchBox } from "react-instantsearch-native";

import PropTypes from "prop-types";
import { COLOR_PALETTE } from "../../utils/constants";

const SearchBox = ({ currentRefinement, refine }) => {
	return (
		<View className="flex-row p-4">
			<View className="w-[10%] h-[50] justify-center items-center rounded-tl-lg rounded-bl-lg bg-[#212133]">
				<Icon name="search" size={20} color={COLOR_PALETTE.white} />
			</View>
			<TextInput
				className="w-[90%] h-[50] p-4 justify-center items-center rounded-tr-lg rounded-br-lg text-white bg-[#212133]"
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

export default connectSearchBox(SearchBox);
