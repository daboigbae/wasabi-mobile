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
import PropTypes from "prop-types";
import { COLOR_PALETTE } from "../../../utils/constants";
import { handleSelectSong } from "../../../utils/MusicPlayerUtil";

const windowWidth = Dimensions.get("window").width;

const Song = ({ song, index, playlist }) => {
	const handleOnPress = async () => {
		await handleSelectSong(index, playlist);
	};
	return (
		<Pressable style={styles.container} onPress={handleOnPress}>
			<Image source={{ uri: song?.artwork }} style={styles.cover} />
			<View style={styles.songInfoContainer}>
				<Text style={styles.songTitle} numberOfLines={2}>
					{song?.title}
				</Text>
				<Text style={styles.artistName} numberOfLines={1}>
					{song?.artist}
				</Text>
			</View>
		</Pressable>
	);
};

Song.propTypes = {
	song: PropTypes.object,
	index: PropTypes.number,
	playlist: PropTypes.arrayOf(PropTypes.object)
};

export default Song;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
		paddingVertical: 10
	},
	cover: {
		height: windowWidth * 0.2,
		width: windowWidth * 0.2
	},
	songTitle: {
		color: COLOR_PALETTE.white,
		width: 200,
		fontSize: 14 * PixelRatio.getFontScale()
	},
	artistName: {
		color: COLOR_PALETTE.lightgray,
		width: 200,
		fontSize: 14 * PixelRatio.getFontScale()
	},

	songInfoContainer: {
		marginLeft: 16
	}
});
