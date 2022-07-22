import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Player from "../components/player/Player";
import GlobalStyles from "../utils/GlobalStyles";

const HomeScreen = () => {
	return (
		<SafeAreaView
			style={[StyleSheet.absoluteFill, styles.container, GlobalStyles.appView]}
		>
			<Player />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		position: "relative"
	}
});

export default HomeScreen;
