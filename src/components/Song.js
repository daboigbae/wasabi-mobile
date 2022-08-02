import React from "react";
import {
	Dimensions,
	Image,
	PixelRatio,
	Pressable,
	StyleSheet,
	Text,
	View
} from "react-native";

import GlobalStyles from "../utils/GlobalStyles";
import PropTypes from "prop-types";
import { handleSelectSong } from "../utils/MusicPlayerUtil";

const width = Dimensions.get("window").width;

const Song = ({ playlist, song, index, testID }) => {
	const handleOnPress = async () => {
		await handleSelectSong(index, playlist);
	};

	return (
		<Pressable style={styles.song} onPress={handleOnPress} testID={testID}>
			<Image style={styles.songImage} source={{ uri: song?.artwork }} />
			<View style={styles.songDetails}>
				<Text
					style={[styles.songName, GlobalStyles.whiteText]}
					numberOfLines={2}
				>
					{song?.title}
				</Text>
				<Text
					style={[styles.artistName, GlobalStyles.whiteText]}
					numberOfLines={1}
				>
					{song?.artist || "Anonymous"}
				</Text>
			</View>
		</Pressable>
	);
};

Song.propTypes = {
	playlist: PropTypes.array.isRequired,
	song: PropTypes.object,
	index: PropTypes.number,
	testID: PropTypes.string
};

export default Song;

const styles = StyleSheet.create({
	song: {
		height: "auto",
		width: "100%",
		alignItems: "center",
		marginTop: 16,
		flexDirection: "row"
	},
	songImage: {
		height: 90,
		width: 90
	},
	songDetails: {
		padding: 16
	},
	songName: {
		fontSize: 14 * PixelRatio.getFontScale(),
		width: width / 2,
		fontWeight: "bold"
	},
	artistName: {
		fontSize: 12 * PixelRatio.getFontScale(),
		fontWeight: "300"
	}
});
