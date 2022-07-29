import React from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";

import SignInIcon from "./SignInIcon";
import SignOutIcon from "./SignOutIcon";

const AuthenticationIcon = ({ navigation }) => {
	const user = useSelector(({ user }) => user?.user?.user);

	return !user ? (
		<SignInIcon navigation={navigation} />
	) : (
		<SignOutIcon navigation={navigation} />
	);
};

AuthenticationIcon.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default AuthenticationIcon;
