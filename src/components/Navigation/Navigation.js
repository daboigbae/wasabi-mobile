import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MAIN_SCREENS } from "../../constants/constants";
import HomeNavigation from "./HomeNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name={MAIN_SCREENS.HOME}
				component={HomeNavigation}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default MainNavigation;
