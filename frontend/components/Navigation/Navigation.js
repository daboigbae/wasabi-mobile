import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { screens, stack } from '../../constants/constants';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
	return (
		<Drawer.Navigator screenOptions={{ headerShown: false }}>
			{screens.map((item, index) => (
				<Drawer.Screen key={index} name={item.name} children={item.component} />
			))}
		</Drawer.Navigator>
	);
};

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={stack.home}
					component={Home}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
