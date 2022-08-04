import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME_SCREENS_ARRAY } from "../utils/screens";
import { HEADER_OPTIONS } from "../utils/constants";
import AuthenticationIcon from "../components/common/icons/AuthenticationIcon";

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
	return (
		<HomeStack.Navigator>
			{HOME_SCREENS_ARRAY.map((screen, index) => (
				<HomeStack.Screen
					key={index}
					name={screen.name}
					options={({ navigation }) => ({
						headerRight: () => <AuthenticationIcon navigation={navigation} />,
						...HEADER_OPTIONS,
						...screen.options
					})}
				>
					{screen.component}
				</HomeStack.Screen>
			))}
		</HomeStack.Navigator>
	);
};

export default HomeNavigation;
