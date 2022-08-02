import React from "react";
import { Image, PixelRatio, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import MoreIcon from "../icons/MoreIcon";

import { COLOR_PALETTE } from "../../../utils/constants";
import PlaylistPlayIcon from "../icons/PlaylistPlayIcon";

const PlaylistDetails = ({ playlist }) => {
	return (
		<>
			<View style={styles.artworkContainer}>
				<Image
					style={styles.tinyLogo}
					source={{
						uri: playlist?.artwork
					}}
				/>
			</View>
			<Text style={styles.playlistName}>{playlist?.name}</Text>
			<Text style={styles.funText}>Songs: {playlist?.songs?.length}</Text>
			<View style={styles.playlistControls}>
				<MoreIcon />
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
	tinyLogo: {
		width: 175,
		height: 175,
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
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16
	}
});
