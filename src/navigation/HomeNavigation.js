import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME_SCREENS_ARRAY } from "../utils/screens";
import { COLOR_PALETTE } from "../utils/constants";

const Tab = createBottomTabNavigator();

const TAB_SCREEN_OPTIONS = {
	headerShown: false,

	tabBarActiveTintColor: COLOR_PALETTE.white,
	tabBarInactiveTintColor: COLOR_PALETTE.lightgray,
	tabBarStyle: {
		height: 100,
		paddingTop: 8,
		backgroundColor: COLOR_PALETTE.dark.primary
	},
	lazy: false //added to ensure that player loads correctly on all tabs
};

const HomeNavigation = () => (
	<Tab.Navigator screenOptions={TAB_SCREEN_OPTIONS}>
		{HOME_SCREENS_ARRAY.map((item, index) => (
			<Tab.Screen
				key={index}
				name={item.name}
				tabIcon="home"
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name={item.tabIcon}
							color={color}
							size={size}
						/>
					)
				}}
			>
				{item.component}
			</Tab.Screen>
		))}
	</Tab.Navigator>
);

export default HomeNavigation;
