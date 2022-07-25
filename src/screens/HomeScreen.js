import React from "react";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import Player from "../components/player/Player";
import Playlist from "../components/Playlist";
import { COLOR_PALETTE } from "../utils/constants";
import GlobalStyles from "../utils/GlobalStyles";
import { objToArray } from "../utils/utils";

const HomeScreen = () => {
	const playlists = useSelector(({ music }) =>
		objToArray(music?.playlists || {})
	);

	const renderPlaylists = () => (
		<FlatList
			style={styles.flatlist}
			data={playlists}
			horizontal={true}
			renderItem={({ item, index }) => (
				<Playlist
					key={item?.name}
					playlist={item}
					testId={`playlist:${index}`}
				/>
			)}
			keyExtractor={(item) => item.name}
		/>
	);

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<View style={styles.container}>
				<Text style={styles.title}>Playlists</Text>
				{renderPlaylists()}
				<Player />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		color: COLOR_PALETTE.white,
		fontSize: 30,
		fontWeight: "700",
		paddingBottom: 32
	},
	flatlist: {
		paddingHorizontal: 16
	}
});

export default HomeScreen;
