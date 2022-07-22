import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { HOME_SCREENS_ARRAY } from "../utils/screens";

const Drawer = createDrawerNavigator();

const HomeNavigation = () => (
	<Drawer.Navigator screenOptions={{ headerShown: false }}>
		{HOME_SCREENS_ARRAY.map((item, index) => (
			<Drawer.Screen key={index} name={item.name}>
				{item.component}
			</Drawer.Screen>
		))}
	</Drawer.Navigator>
);

export default HomeNavigation;
