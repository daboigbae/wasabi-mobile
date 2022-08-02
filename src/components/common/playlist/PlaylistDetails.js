import React from "react";
import {
	Dimensions,
	Image,
	PixelRatio,
	StyleSheet,
	Text,
	View
} from "react-native";
import PropTypes from "prop-types";

import { COLOR_PALETTE } from "../../../utils/constants";
import PlaylistPlayIcon from "../icons/PlaylistPlayIcon";

const windowWidth = Dimensions.get("window").width;

const PlaylistDetails = ({ playlist }) => {
	return (
		<>
			<View style={styles.artworkContainer}>
				<Image
					style={styles.artwork}
					source={{
						uri: playlist?.artwork
					}}
				/>
			</View>
			<Text style={styles.playlistName}>{playlist?.name}</Text>
			<Text style={styles.funText}>Songs: {playlist?.songs?.length}</Text>
			<View style={styles.playlistControls}>
				<PlaylistPlayIcon playlist={playlist?.songs} />
			</View>
		</>
	);
};

PlaylistDetails.propTypes = {
	playlist: PropTypes.object.isRequired
};

export default PlaylistDetails;

const styles = StyleSheet.create({
	artworkContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 16
	},
	artwork: {
		height: windowWidth * 0.5,
		width: windowWidth * 0.5,
		borderRadius: 8
	},
	playlistName: {
		color: COLOR_PALETTE.white,
		fontSize: 20 / PixelRatio.getFontScale(),
		letterSpacing: 1
	},
	funText: {
		color: COLOR_PALETTE.white,
		fontSize: 16 / PixelRatio.getFontScale(),
		marginTop: 8
	},
	playlistControls: {
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		marginBottom: 16
	}
});
