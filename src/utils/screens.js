import React from "react";

import {
	COLOR_PALETTE,
	HOME_SCREENS,
	MAIN_SCREENS,
	USER_AUTH_SCREENS,
	USER_PROFILE_SCREENS
} from "../utils/constants";

import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/authenticationScreens/SignInScreen";
import SignUpScreen from "../screens/authenticationScreens/SignUpScreen";
import LibraryScreen from "../screens/LibraryScreen";
import CloseScreenIcon from "../components/common/icons/CloseScreenIcon";
import HomeNavigation from "../navigation/HomeNavigation";
import PlaylistScreen from "../screens/PlaylistScreen";
import ForgotPasswordScreen from "../screens/authenticationScreens/ForgotPasswordScreen";
import UserProfileScreen from "../screens/userProfileScreens/UserProfileScreen";
import EditUserProfileScreen from "../screens/userProfileScreens/EditUserProfileScreen";

export const MAIN_SCREENS_ARRAY = [
	{
		name: MAIN_SCREENS.HOME_STACK_SCREEN,
		component: () => <HomeNavigation />,
		tabIcon: "home",
		headerShown: true
	},
	{
		name: MAIN_SCREENS.LIBRARY_SCREEN,
		component: () => <LibraryScreen />,
		tabIcon: "music"
	}
];

export const USER_PROFILE_SCREENS_ARRAY = [
	{
		name: USER_PROFILE_SCREENS.USER_PROFILE_SCREEN,
		component: (props) => <UserProfileScreen {...props} />,
		options: () => ({
			headerTintColor: COLOR_PALETTE.white,
			headerBackTitle: "",
			headerTitle: " "
		})
	},
	{
		name: USER_PROFILE_SCREENS.EDIT_USER_PROFILE_SCREEN,
		component: (props) => <EditUserProfileScreen {...props} />,
		options: () => ({
			headerTintColor: COLOR_PALETTE.white,
			headerBackTitle: "",
			headerTitle: ""
		})
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
		options: { headerShown: true, headerRight: null, headerTitle: "" }
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
	},

	{
		name: USER_AUTH_SCREENS.FORGOT_PASSWORD_SCREEN,
		component: (props) => <ForgotPasswordScreen {...props} />,
		options: () => ({
			headerTintColor: COLOR_PALETTE.white,
			headerBackTitle: " "
		})
	}
];
