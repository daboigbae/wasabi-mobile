import React from "react";

import {
	COLOR_PALETTE,
	HOME_SCREENS,
	USER_AUTH_SCREENS
} from "../utils/constants";
import LibraryScreen from "../screens/LibraryScreen";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/authenticationScreens/SignInScreen";

export const HOME_SCREENS_ARRAY = [
	{
		name: HOME_SCREENS.HOME_SCREEN,
		component: () => <HomeScreen />,
		tabIcon: "home"
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
		component: () => <SignInScreen />,
		options: () => ({
			headerTintColor: COLOR_PALETTE.white
		})
	}
];
