import React from "react";
import PropTypes from "prop-types";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TabBarIcon = ({ name, color, size }) => (
	<MaterialCommunityIcons name={name} color={color} size={size} />
);

TabBarIcon.propTypes = {
	name: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.number
};

export default TabBarIcon;
