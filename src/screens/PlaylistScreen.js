import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import GlobalStyles from "../utils/GlobalStyles";

const PlaylistScreen = () => {
	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView>
				<View style={styles.container}>
					<Text>Playlist Screen</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

PlaylistScreen.propTypes = {
	route: PropTypes.object.isRequired,
	navigation: PropTypes.object
};

export default PlaylistScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16
	}
});
