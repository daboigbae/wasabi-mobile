import React from "react";
import {
	StyleSheet,
	SafeAreaView,
	Text,
	View,
	FlatList,
	ScrollView
} from "react-native";
import { useSelector } from "react-redux";

import Player from "../components/player/Player";
import Playlist from "../components/Playlist";
import { COLOR_PALETTE } from "../utils/constants";
import GlobalStyles from "../utils/GlobalStyles";
import {
	handlePlaylistChange,
	playSelectedSong
} from "../utils/MusicPlayerUtil";
import { objToArray } from "../utils/utils";

const HomeScreen = () => {
	const playlists = useSelector(({ music }) =>
		objToArray(music?.playlists || {})
	);

	const email = useSelector(
		({ UserSlice }) => UserSlice?.userInformation?.user?.email
	);

	const onPress = async (songs) => {
		await handlePlaylistChange(songs);
		await playSelectedSong(0);
	};

	const renderPlaylists = () => (
		<FlatList
			style={styles.playlists}
			showsHorizontalScrollIndicator={false}
			data={playlists}
			horizontal={true}
			renderItem={({ item, index }) => (
				<Playlist
					key={item?.name}
					playlist={item}
					testId={`playlist:${index}`}
					onPress={() => onPress(item?.songs || [])}
				/>
			)}
			keyExtractor={(item) => item.name}
		/>
	);

	return (
		<SafeAreaView style={[StyleSheet.absoluteFill, GlobalStyles.appView]}>
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.title}>
						{email ? `Welcome ${email}` : "Wasabi Music"}
					</Text>
					<Text style={styles.funText}>
						Wasabi Music is a music streaming platform. Listen to your favorite
						music NFTs and tell us what you think about them.
					</Text>
					<Text style={styles.title}>Popular Playlists</Text>
					{renderPlaylists()}
				</View>
			</ScrollView>
			<Player />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16
	},
	title: {
		color: COLOR_PALETTE.white,
		fontSize: 30,
		fontWeight: "800",
		marginTop: 32
	},
	playlists: {
		marginTop: 16
	},
	funText: {
		color: COLOR_PALETTE.white,
		fontSize: 16,
		fontWeight: "300",
		paddingTop: 16
	}
});

export default HomeScreen;
