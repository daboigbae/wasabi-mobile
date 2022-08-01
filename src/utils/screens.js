import React from "react";

import {
	COLOR_PALETTE,
	HOME_SCREENS,
	MAIN_SCREENS,
	USER_AUTH_SCREENS
} from "../utils/constants";

import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/authenticationScreens/SignInScreen";
import SignUpScreen from "../screens/authenticationScreens/SignUpScreen";
import LibraryScreen from "../screens/LibraryScreen";
import CloseScreenIcon from "../components/common/icons/CloseScreenIcon";
import HomeStackScreen from "../screens/HomeStackScreen";
import PlaylistScreen from "../screens/PlaylistScreen";

export const MAIN_SCREENS_ARRAY = [
	{
		name: MAIN_SCREENS.HOME_STACK_SCREEN,
		component: () => <HomeStackScreen />,
		tabIcon: "home",
		headerShown: true
	},
	{
		name: MAIN_SCREENS.LIBRARY_SCREEN,
		component: () => <LibraryScreen />,
		tabIcon: "music"
	}
];

export const HOME_SCREENS_ARRAY = [
	{
		name: HOME_SCREENS.HOME_SCREEN,
		component: (props) => <HomeScreen {...props} />,
		options: { headerShown: true }
	},
	{
		name: HOME_SCREENS.PLAYLIST_SCREEN,
		component: (props) => <PlaylistScreen {...props} />,
		options: { headerShown: false }
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
