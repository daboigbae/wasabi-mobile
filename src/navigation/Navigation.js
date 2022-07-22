import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MAIN_SCREENS } from "../utils/constants";
import HomeNavigation from "./HomeNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => (
	<>
		<StatusBar barStyle="light-content" />
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={MAIN_SCREENS.MAIN}
					component={HomeNavigation}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</>
);

export default MainNavigation;
