import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HOME_SCREENS_ARRAY } from "../utils/screens";
import { COLOR_PALETTE } from "../utils/constants";
import AuthenticationIcon from "../components/common/icons/AuthenticationIcon";

const HomeStack = createNativeStackNavigator();

const TAB_SCREEN_OPTIONS = {
	headerStyle: {
		backgroundColor: COLOR_PALETTE.dark.primary
	},
	headerTintColor: COLOR_PALETTE.white,

	tabBarActiveTintColor: COLOR_PALETTE.white,
	tabBarInactiveTintColor: COLOR_PALETTE.lightgray,
	tabBarStyle: {
		height: 100,
		paddingTop: 8,
		backgroundColor: COLOR_PALETTE.dark.primary
	},
	lazy: false //added to ensure that player loads correctly on all tabs
};

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			{HOME_SCREENS_ARRAY.map((screen, index) => (
				<HomeStack.Screen
					key={index}
					name={screen.name}
					options={({ navigation }) => ({
						headerRight: () => <AuthenticationIcon navigation={navigation} />,
						...screen.options,
						...TAB_SCREEN_OPTIONS
					})}
				>
					{screen.component}
				</HomeStack.Screen>
			))}
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
