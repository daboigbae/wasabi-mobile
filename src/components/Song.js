import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import PropTypes from "prop-types";
const Song = ({ song, handleSongSelect }) => {
	return (
		<Pressable style={styles.song} onPress={handleSongSelect}>
			<Image style={styles.songImage} source={{ uri: song?.artwork }} />
			<View style={styles.songDetails}>
				<Text style={[styles.songName, GlobalStyles.whiteText]}>
					{song?.title}
				</Text>
				<Text style={[styles.artistName, GlobalStyles.whiteText]}>
					{song?.artistName || "Anonymous"}
				</Text>
			</View>
		</Pressable>
	);
};

Song.propTypes = {
	song: PropTypes.object,
	handleSongSelect: PropTypes.func
};
export default Song;

const styles = StyleSheet.create({
	song: {
		height: "auto",
		width: "100%",
		marginTop: 16,
		flexDirection: "row"
	},

	songImage: {
		height: 90,
		width: 90,
		borderRadius: 8
	},

	songDetails: {
		padding: 8
	},

	songName: {
		fontSize: 14,
		width: "95%",
		fontWeight: "bold"
	},

	artistName: {
		fontSize: 12,
		fontWeight: "300"
	}
});
