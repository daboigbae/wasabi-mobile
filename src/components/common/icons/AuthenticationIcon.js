import React from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import SignInIcon from "./SignInIcon";
import ProfileIcon from "./ProfileIcon";

const AuthenticationIcon = ({ navigation }) => {
	const userInformation = useSelector(
		({ UserSlice }) => UserSlice?.userInformation
	);

	return !userInformation ? (
		<SignInIcon navigation={navigation} />
	) : (
		<ProfileIcon navigation={navigation} />
	);
};

AuthenticationIcon.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default AuthenticationIcon;
