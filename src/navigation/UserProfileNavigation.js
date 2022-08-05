import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_PROFILE_SCREENS_ARRAY } from "../utils/screens";

const Stack = createStackNavigator();

const UserProfileNavigation = () => (
	<Stack.Navigator screenOptions={{ presentation: "modal" }}>
		{USER_PROFILE_SCREENS_ARRAY.map((screen, index) => (
			<Stack.Screen key={index} name={screen.name} options={screen?.options}>
				{screen.component}
			</Stack.Screen>
		))}
	</Stack.Navigator>
);

export default UserProfileNavigation;
