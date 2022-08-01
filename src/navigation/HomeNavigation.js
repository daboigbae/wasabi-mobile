import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MAIN_SCREENS_ARRAY } from "../utils/screens";
import { COLOR_PALETTE } from "../utils/constants";
import TabBarIcon from "../components/common/icons/TabBarIcon";
import AuthenticationIcon from "../components/common/icons/AuthenticationIcon";
import BottomTabBar from "../components/navigation/BottomTabBar";

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
		<Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
			{MAIN_SCREENS_ARRAY.map((item, index) => (
				<Tab.Screen
					key={index}
					name={item.name}
					options={({ navigation }) => ({
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon name={item.tabIcon} color={color} size={size} />
						),
						headerRight: () => <AuthenticationIcon navigation={navigation} />,
						headerShown: item?.headerShown || false,
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
