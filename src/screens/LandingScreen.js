import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

import { useDispatch } from "react-redux";
import LottieView from "lottie-react-native";

import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

import PropTypes from "prop-types";
import { COLOR_PALETTE, NAVIGATORS } from "../utils/constants";

import GlobalStyles from "../utils/GlobalStyles";
import { setPlaylists } from "../redux/MusicSlice";

const LandingScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const loadInitialPlaylists = async () => {
		await auth().signInAnonymously();
		const playlistSnapshot = await database().ref("/playlists").once("value");
		dispatch(setPlaylists(playlistSnapshot.val()));
		navigation.replace(NAVIGATORS.MAIN);
	};

	useEffect(() => {
		setTimeout(() => {
			loadInitialPlaylists();
		}, 700);
	}, [navigation]);

	return (
		<SafeAreaView
			style={[StyleSheet.absoluteFill, styles.container, GlobalStyles.appView]}
		>
			<LottieView
				source={require("../assets/lottie/landingAnimation.json")}
				style={styles.lottie}
				autoPlay
				loop
			/>
			<Text style={styles.title}>gm</Text>
		</SafeAreaView>
	);
};

LandingScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default LandingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: COLOR_PALETTE.white,
		fontSize: 20,
		fontWeight: "bold"
	},
	lottie: { width: "70%" }
});
