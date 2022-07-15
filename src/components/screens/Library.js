import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import SongLibrary from "../../assets/SongLibrary";
import { coverImage } from "../../constants/constants";
import Divider from "../misc/Divider";
import Song from "../misc/Song";
import Player from "../player/Player";
import GlobalStyles from "../../styles/GlobalStyles";

function Library() {
	const [selectedSong, setSelectedSong] = useState(null);

	const renderPlaylist = ({ item, index }) => (
		<Song
			song={item}
			index={index}
			handleSongSelect={() => setSelectedSong({ item, index })}
		/>
	);

	return (
		<SafeAreaView
			style={[StyleSheet.absoluteFill, styles.container, GlobalStyles.appView]}
		>
			<View style={styles.flexContainer}>
				<View style={styles.detailsContainer}>
					<Image
						style={styles.playlistImage}
						source={{
							uri: coverImage
						}}
					/>
					<View style={styles.contentContainer}>
						<Text style={[styles.titleText, GlobalStyles.whiteText]}>
							Top NFT Songs
						</Text>
						<Text style={GlobalStyles.whiteText}>
							Total Songs: {SongLibrary?.length}
						</Text>
					</View>
				</View>
				<Divider />
				<FlatList
					data={SongLibrary}
					renderItem={renderPlaylist}
					keyExtractor={(item, index) => index.toString()}
					contentContainerStyle={styles.songList}
					showsVerticalScrollIndicator={false}
				/>
			</View>
			{selectedSong && (
				<Player playlist={SongLibrary} selectedSong={selectedSong} />
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-start",
		position: "relative"
	},

	flexContainer: {
		flex: 1,
		width: "100%",
		paddingTop: 20,
		paddingHorizontal: 20
	},

	detailsContainer: {
		height: "auto",
		width: "100%",
		flexDirection: "row",
		justifyContent: "flex-start"
	},

	playlistImage: {
		height: 120,
		width: 120,
		borderRadius: 8
	},

	contentContainer: {
		height: 120,
		flex: 1,
		padding: 12
	},

	titleText: {
		fontSize: 18,
		fontWeight: "bold"
	},

	songList: {
		paddingBottom: 165
	}
});

export default Library;