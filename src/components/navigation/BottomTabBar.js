import React from "react";
import { Text, View, Pressable } from "react-native";
import PropTypes from "prop-types";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Player from "../player/Player";
import { COLOR_PALETTE } from "../../utils/constants";

const BottomTabBar = ({ state, descriptors, navigation }) => {
	return (
		<>
			<Player />
			<View
				style={{
					flexDirection: "row",
					borderTopColor: COLOR_PALETTE.lightgray,
					borderTopWidth: 1
				}}
			>
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
								? options.title
								: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: "tabLongPress",
							target: route.key
						});
					};

					return (
						<Pressable
							key={index}
							accessibilityRole="button"
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={{
								flex: 1,
								height: 100,
								backgroundColor: COLOR_PALETTE.dark.primary,
								alignItems: "center",
								paddingTop: 16
							}}
						>
							<MaterialCommunityIcons
								name={label.toLowerCase()}
								size={24}
								color={COLOR_PALETTE.white}
							/>
							<Text
								style={{
									color: isFocused
										? COLOR_PALETTE.white
										: COLOR_PALETTE.lightgray,
									fontWeight: "500",
									marginTop: 8
								}}
							>
								{label}
							</Text>
						</Pressable>
					);
				})}
			</View>
		</>
	);
};

BottomTabBar.propTypes = {
	state: PropTypes.object,
	descriptors: PropTypes.object,
	navigation: PropTypes.object
};

export default BottomTabBar;
