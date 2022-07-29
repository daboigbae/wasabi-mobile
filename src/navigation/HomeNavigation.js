import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME_SCREENS_ARRAY } from "../utils/screens";
import { COLOR_PALETTE } from "../utils/constants";
import TabBarIcon from "../components/common/icons/TabBarIcon";
import AuthenticationIcon from "../components/common/icons/AuthenticationIcon";

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
						headerRight: () => <AuthenticationIcon navigation={navigation} />,
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
