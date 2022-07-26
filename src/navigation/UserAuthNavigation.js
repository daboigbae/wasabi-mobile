import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { COLOR_PALETTE } from "../utils/constants";
import { USER_AUTH_SCREENS_ARRAY } from "../utils/screens";

const Stack = createStackNavigator();

const STACK_SCREEN_OPTIONS = {
	headerStyle: {
		backgroundColor: COLOR_PALETTE.dark.primary
	}
};

const UserAuthNavigation = () => {
	return (
		<Stack.Navigator screenOptions={STACK_SCREEN_OPTIONS}>
			{USER_AUTH_SCREENS_ARRAY.map((item, index) => (
				<Stack.Screen key={index} name={item.name} tabIcon="home">
					{item.component}
				</Stack.Screen>
			))}
		</Stack.Navigator>
	);
};

export default UserAuthNavigation;
