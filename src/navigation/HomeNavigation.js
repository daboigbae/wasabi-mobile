import React from "react";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME_SCREENS_ARRAY } from "../utils/screens";
import { COLOR_PALETTE, NAVIGATORS } from "../utils/constants";
import { Pressable } from "react-native";
import { handleSignOut } from "../utils/firebase";
import TabBarIcon from "../components/common/icons/TabBarIcon";
import SignInIcon from "../components/common/icons/SignInIcon";
import SignOutIcon from "../components/common/icons/SignOutIcon";

const Tab = createBottomTabNavigator();

const TAB_SCREEN_OPTIONS = {
	headerStyle: {
		backgroundColor: COLOR_PALETTE.dark.primary
	},
	headerTintColor: COLOR_PALETTE.white,

	tabBarActiveTintColor: COLOR_PALETTE.white,
	tabBarInactiveTintColor: COLOR_PALETTE.lightgray,
	tabBarStyle: {
		height: 100,
		paddingTop: 8,
		backgroundColor: COLOR_PALETTE.dark.primary
	},
	lazy: false //added to ensure that player loads correctly on all tabs
};

const HomeNavigation = () => {
	const user = useSelector(({ user }) => user?.user?.user);

	const handleNavigation = async (navigation) =>
		!user
			? navigation.navigate(NAVIGATORS.USER_AUTH)
			: handleSignOut(() => navigation.navigate(NAVIGATORS.MAIN));

	return (
		<Tab.Navigator>
			{HOME_SCREENS_ARRAY.map((item, index) => (
				<Tab.Screen
					key={index}
					name={item.name}
					tabIcon="home"
					options={({ navigation }) => ({
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon name={item.tabIcon} color={color} size={size} />
						),
						headerRight: () => (
							<Pressable onPress={() => handleNavigation(navigation)}>
								{!user ? <SignInIcon /> : <SignOutIcon />}
							</Pressable>
						),
						...TAB_SCREEN_OPTIONS
					})}
				>
					{item.component}
				</Tab.Screen>
			))}
		</Tab.Navigator>
	);
};

export default HomeNavigation;
