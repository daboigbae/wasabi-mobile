import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_PROFILE_SCREENS_ARRAY } from "../utils/screens";
import { HEADER_OPTIONS } from "../utils/constants";
import SignOutIcon from "../components/common/icons/SignOutIcon";

const Stack = createStackNavigator();

const UserProfileNavigation = () => (
	<Stack.Navigator screenOptions={{ presentation: "modal" }}>
		{USER_PROFILE_SCREENS_ARRAY.map((screen, index) => (
			<Stack.Screen
				key={index}
				name={screen.name}
				options={({ navigation }) => ({
					headerRight: () => <SignOutIcon navigation={navigation} />,
					...screen.options,
					...HEADER_OPTIONS
				})}
			>
				{screen.component}
			</Stack.Screen>
		))}
	</Stack.Navigator>
);

export default UserProfileNavigation;
