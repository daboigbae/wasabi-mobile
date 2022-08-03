import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_PROFILE_SCREENS_ARRAY } from "../utils/screens";
import { COLOR_PALETTE } from "../utils/constants";
import SignOutIcon from "../components/common/icons/SignOutIcon";

const Stack = createStackNavigator();

const SCREEN_OPTIONS = {
	headerStyle: {
		backgroundColor: COLOR_PALETTE.dark.primary
	},
	headerTintColor: COLOR_PALETTE.white,
	headerTitle: ""
};

const UserProfileNavigation = () => {
	return (
		<Stack.Navigator>
			{USER_PROFILE_SCREENS_ARRAY.map((screen, index) => (
				<Stack.Screen
					key={index}
					name={screen.name}
					options={({ navigation }) => ({
						headerRight: () => <SignOutIcon navigation={navigation} />,
						...screen.options,
						...SCREEN_OPTIONS
					})}
				>
					{screen.component}
				</Stack.Screen>
			))}
		</Stack.Navigator>
	);
};

export default UserProfileNavigation;
