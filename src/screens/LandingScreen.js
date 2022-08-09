import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";

import { useDispatch } from "react-redux";
import LottieView from "lottie-react-native";

import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

import PropTypes from "prop-types";
import { NAVIGATORS } from "../utils/constants";

import GlobalStyles from "../utils/GlobalStyles";
import { setPlaylists } from "../redux/MusicSlice";
import { getFirebaseUser } from "../utils/firebase";

const LandingScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const user = getFirebaseUser();

	const loadInitialPlaylists = async () => {
		if (!user) {
			await auth().signInAnonymously();
		}
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
			className="flex-1 relative justify-center items-center"
			style={GlobalStyles.appView}
		>
			<LottieView
				source={require("../assets/lottie/landingAnimation.json")}
				className="w-[70%]"
				autoPlay
				loop
			/>
			<Text className="text-white text-xl font-bold">gm</Text>
		</SafeAreaView>
	);
};

LandingScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default LandingScreen;
