import React from "react";

import {
	COLOR_PALETTE,
	HOME_SCREENS,
	USER_AUTH_SCREENS
} from "../utils/constants";

import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/authenticationScreens/SignInScreen";
import SignUpScreen from "../screens/authenticationScreens/SignUpScreen";
import LibraryScreen from "../screens/LibraryScreen";
import CloseScreenIcon from "../components/common/icons/CloseScreenIcon";

export const HOME_SCREENS_ARRAY = [
	{
		name: HOME_SCREENS.HOME_SCREEN,
		component: () => <HomeScreen />,
		tabIcon: "home",
		headerShown: true
	},
	{
		name: HOME_SCREENS.LIBRARY_SCREEN,
		component: () => <LibraryScreen />,
		tabIcon: "music"
	}
];

export const USER_AUTH_SCREENS_ARRAY = [
	{
		name: USER_AUTH_SCREENS.SIGN_IN_SCREEN,
		component: (props) => <SignInScreen {...props} />,
		options: (props) => ({
			headerLeft: () => <CloseScreenIcon {...props} />,
			headerTintColor: COLOR_PALETTE.white
		})
	},
	{
		name: USER_AUTH_SCREENS.SIGN_UP_SCREEN,
		component: (props) => <SignUpScreen {...props} />,
		options: () => ({
			headerTintColor: COLOR_PALETTE.white,
			headerBackTitle: " "
		})
	}
];
