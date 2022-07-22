import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME_SCREENS_ARRAY } from "../utils/screens";

const Tab = createBottomTabNavigator();

const HomeNavigation = () => (
	<Tab.Navigator screenOptions={{ headerShown: false }}>
		{HOME_SCREENS_ARRAY.map((item, index) => (
			<Tab.Screen key={index} name={item.name}>
				{item.component}
			</Tab.Screen>
		))}
	</Tab.Navigator>
);

export default HomeNavigation;
