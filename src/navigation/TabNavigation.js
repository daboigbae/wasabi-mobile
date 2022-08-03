import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MAIN_SCREENS_ARRAY } from "../utils/screens";
import TabBarIcon from "../components/common/icons/TabBarIcon";
import BottomTabBar from "../components/navigation/BottomTabBar";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
			{MAIN_SCREENS_ARRAY.map((item, index) => (
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
