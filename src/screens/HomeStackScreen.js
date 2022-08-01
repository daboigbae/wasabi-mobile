import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HOME_SCREENS_ARRAY } from "../utils/screens";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			{HOME_SCREENS_ARRAY.map((screen, index) => (
				<HomeStack.Screen
					key={index}
					name={screen.name}
					options={screen.options}
				>
					{screen.component}
				</HomeStack.Screen>
			))}
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
