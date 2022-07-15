import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import LibraryScreen from "../screens/LibraryScreen";
import { HOME_SCREENS } from "../utils/constants";

const Drawer = createDrawerNavigator();

const HOME_SCREENS_ARRAY = [
	{
		name: HOME_SCREENS.LIBRARY_SCREEN,
		component: () => <LibraryScreen />
	}
];

const HomeNavigation = () => (
	<Drawer.Navigator screenOptions={{ headerShown: false }}>
		{HOME_SCREENS_ARRAY.map((item, index) => (
			// eslint-disable-next-line react/no-children-prop
			<Drawer.Screen key={index} name={item.name} children={item.component} />
		))}
	</Drawer.Navigator>
);

export default HomeNavigation;
