import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { NAVIGATORS } from "../utils/constants";

import LandingScreen from "../screens/LandingScreen";
import UserAuthNavigation from "./UserAuthNavigation";
import UserProfileNavigation from "./UserProfileNavigation";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false
};

const MainNavigation = () => (
	<>
		<StatusBar barStyle="light-content" />
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={NAVIGATORS.LANDING}
					component={LandingScreen}
					options={NAVIGATION_OPTIONS}
				/>
				<Stack.Screen
					name={NAVIGATORS.USER_AUTH}
					component={UserAuthNavigation}
					options={NAVIGATION_OPTIONS}
				/>

				<Stack.Screen
					name={NAVIGATORS.MAIN}
					component={TabNavigation}
					options={NAVIGATION_OPTIONS}
				/>
				<Stack.Screen
					name={NAVIGATORS.USER_PROFILE}
					component={UserProfileNavigation}
					options={NAVIGATION_OPTIONS}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</>
);

export default MainNavigation;
