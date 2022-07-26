import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { NAVIGATORS } from "../utils/constants";
import HomeNavigation from "./HomeNavigation";
import LandingScreen from "../screens/LandingScreen";
import UserAuthNavigation from "./UserAuthNavigation";

const Stack = createStackNavigator();

const MainNavigation = () => (
	<>
		<StatusBar barStyle="light-content" />
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={NAVIGATORS.LANDING}
					component={LandingScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name={NAVIGATORS.USER_AUTH}
					component={UserAuthNavigation}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name={NAVIGATORS.MAIN}
					component={HomeNavigation}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</>
);

export default MainNavigation;
