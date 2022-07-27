import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import auth from "@react-native-firebase/auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME_SCREENS_ARRAY } from "../utils/screens";
import { COLOR_PALETTE, NAVIGATORS } from "../utils/constants";
import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { handleSignOut } from "../utils/firebase";

const Tab = createBottomTabNavigator();

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

const HomeNavigation = () => {
	const [isUserAnonymous, setIsUserAnonymous] = useState();

	const onAuthStateChanged = (user) => {
		setIsUserAnonymous(user?.isAnonymous);
	};

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	const handleNavigation = async (navigation) =>
		isUserAnonymous
			? navigation.navigate(NAVIGATORS.USER_AUTH)
			: await handleSignOut();

	return (
		<Tab.Navigator>
			{HOME_SCREENS_ARRAY.map((item, index) => (
				<Tab.Screen
					key={index}
					name={item.name}
					tabIcon="home"
					options={({ navigation }) => ({
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name={item.tabIcon}
								color={color}
								size={size}
							/>
						),
						headerRight: () => (
							<Pressable onPress={() => handleNavigation(navigation)}>
								<Icon
									name={
										isUserAnonymous ? "card-account-details-star" : "logout"
									}
									color="white"
									size={32}
									style={styles.icon}
								/>
							</Pressable>
						),
						...TAB_SCREEN_OPTIONS
					})}
				>
					{item.component}
				</Tab.Screen>
			))}
		</Tab.Navigator>
	);
};

export default HomeNavigation;

const styles = StyleSheet.create({
	icon: {
		marginRight: 16
	}
});
