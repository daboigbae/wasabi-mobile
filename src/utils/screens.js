import React from "react";

import {
	COLOR_PALETTE,
	HEADER_OPTIONS,
	HOME_SCREENS,
	BOTTOM_NAVIGATION_SCREENS,
	NAVIGATORS,
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
import SignOutIcon from "../components/common/icons/SignOutIcon";
export const AUTHENTICATED_BOTTOM_SCREENS_ARRAY = [
	{
		name: BOTTOM_NAVIGATION_SCREENS.HOME_STACK,
		component: () => <HomeNavigation />,
		headerTitle: "Home",
		headerShown: true
	},
	{
		name: BOTTOM_NAVIGATION_SCREENS.SEARCH_STACK,
		component: () => <LibraryScreen />,
		headerTitle: "Search"
	},
	{
		name: BOTTOM_NAVIGATION_SCREENS.LIBRARY_STACK,
		component: () => <LibraryScreen />,
		headerTitle: "Your Library"
	}
];

export const NOT_AUTHENTICATED_BOTTOM_SCREENS_ARRAY = [
	{
		name: BOTTOM_NAVIGATION_SCREENS.HOME_STACK,
		component: () => <HomeNavigation />,
		headerTitle: "Home",
		headerShown: true
	},
	{
		name: BOTTOM_NAVIGATION_SCREENS.LIBRARY_STACK,
		component: () => <LibraryScreen />,
		headerTitle: "Search"
	}
];

export const USER_PROFILE_SCREENS_ARRAY = [
	{
		name: USER_PROFILE_SCREENS.USER_PROFILE_SCREEN,
		component: (props) => <UserProfileScreen {...props} />,
		options: ({ navigation }) => ({
			headerRight: () => <SignOutIcon navigation={navigation} />,
			headerTintColor: COLOR_PALETTE.white,
			...HEADER_OPTIONS
		})
	},
	{
		name: USER_PROFILE_SCREENS.EDIT_USER_PROFILE_SCREEN,
		component: (props) => <EditUserProfileScreen {...props} />,
		options: ({ navigation }) => ({
			headerLeft: () => <CloseScreenIcon onPress={() => navigation.goBack()} />,
			headerTintColor: COLOR_PALETTE.white,
			...HEADER_OPTIONS
		})
	}
];

export const HOME_SCREENS_ARRAY = [
	{
		name: HOME_SCREENS.HOME_SCREEN,
		component: (props) => <HomeScreen {...props} />,
		options: { headerShown: true, headerTitle: "Wasabi Music" }
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
		options: ({ navigation }) => ({
			headerLeft: () => (
				<CloseScreenIcon
					onPress={() => navigation.replace(NAVIGATORS.LANDING)}
				/>
			),
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
