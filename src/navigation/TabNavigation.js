import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	AUTHENTICATED_BOTTOM_SCREENS_ARRAY,
	NOT_AUTHENTICATED_BOTTOM_SCREENS_ARRAY
} from "../utils/screens";
import TabBarIcon from "../components/common/icons/TabBarIcon";
import BottomTabBar from "../components/navigation/BottomTabBar";
import { getFirebaseUser } from "../utils/firebase";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
	const user = getFirebaseUser();

	const screenArray = user
		? AUTHENTICATED_BOTTOM_SCREENS_ARRAY
		: NOT_AUTHENTICATED_BOTTOM_SCREENS_ARRAY;

	return (
		<Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
			{screenArray.map((item, index) => (
				<Tab.Screen
					key={index}
					name={item.name}
					options={() => ({
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon name={item.tabIcon} color={color} size={size} />
						),
						headerShown: false
					})}
				>
					{item.component}
				</Tab.Screen>
			))}
		</Tab.Navigator>
	);
};

export default TabNavigation;
