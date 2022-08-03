import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME_SCREENS_ARRAY } from "../utils/screens";
import AuthenticationIcon from "../components/common/icons/AuthenticationIcon";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
	<HomeStack.Navigator>
		{HOME_SCREENS_ARRAY.map((screen, index) => (
			<HomeStack.Screen
				key={index}
				name={screen.name}
				options={({ navigation }) => ({
					headerRight: () => <AuthenticationIcon navigation={navigation} />,
					...screen.options
				})}
			>
				{screen.component}
			</HomeStack.Screen>
		))}
	</HomeStack.Navigator>
);

export default HomeStackScreen;
