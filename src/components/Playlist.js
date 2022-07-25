import React from "react";
import { Image, Pressable, StyleSheet, Dimensions } from "react-native";

import PropTypes from "prop-types";

const windowWidth = Dimensions.get("window").width;

const Playlist = ({ playlist, testID, onPress }) => (
	<Pressable style={styles.playlist} onPress={onPress} testID={testID}>
		<Image style={styles.playlistImage} source={{ uri: playlist?.artwork }} />
	</Pressable>
);

Playlist.propTypes = {
	playlist: PropTypes.object.isRequired,
	onPress: PropTypes.func.isRequired,
	testID: PropTypes.string
};

export default Playlist;

const styles = StyleSheet.create({
	playlist: {
		height: "auto",
		width: windowWidth * 0.55,
		marginTop: 16,
		flexDirection: "row"
	},
	playlistImage: {
		height: windowWidth * 0.5,
		width: windowWidth * 0.5,
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
