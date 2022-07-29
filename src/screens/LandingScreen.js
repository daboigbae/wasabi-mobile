import React, { useEffect } from "react";
import {
	StyleSheet,
	SafeAreaView,
	ActivityIndicator,
	Text
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

import PropTypes from "prop-types";
import { COLOR_PALETTE, NAVIGATORS } from "../utils/constants";

import GlobalStyles from "../utils/GlobalStyles";
import { setPlaylists } from "../redux/MusicSlice";
import { setUser } from "../redux/UserSlice";

const LandingScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	const user = useSelector(({ UserSlice }) => UserSlice?.user);

	const loadInitialPlaylists = async () => {
		const playlistSnapshot = await database().ref("/playlists").once("value");

		dispatch(setPlaylists(playlistSnapshot.val()));

		navigation.replace(NAVIGATORS.MAIN);
	};

	const handleAnonymousSignIn = async () => {
		const anonymousUser = await auth().signInAnonymously();
		dispatch(setUser(anonymousUser));
		await loadInitialPlaylists();
	};

	useEffect(() => {
		if (!user) {
			handleAnonymousSignIn();
		} else {
			loadInitialPlaylists();
		}
	}, []);

	return (
		<SafeAreaView
			style={[StyleSheet.absoluteFill, styles.container, GlobalStyles.appView]}
		>
			<Text style={styles.title}>Wasabi Music</Text>
			<ActivityIndicator size="large" color={COLOR_PALETTE.lightgray} />
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
		fontSize: 30,
		fontWeight: "bold",
		marginBottom: 16
	}
});
