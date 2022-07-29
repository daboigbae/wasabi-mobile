import React from "react";
import { Image, Text, StyleSheet, View, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { connectHighlight } from "react-instantsearch-native";
import { COLOR_PALETTE } from "../../utils/constants";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {
	handlePlaylistChange,
	playSelectedSong
} from "../../utils/MusicPlayerUtil";

const windowWidth = Dimensions.get("window").width;

const SongHit = ({ hit }) => {
	const onPress = async () => {
		await handlePlaylistChange([hit]);
		await playSelectedSong(0);
	};

	return (
		<Pressable style={style.container} onPress={onPress}>
			<Image source={{ uri: hit?.artwork }} style={style.cover} />
			<View style={style.songInfoContainer}>
				<Text style={style.text} numberOfLines={1}>
					{hit.title}
				</Text>
				<Text style={style.text}>{hit?.artist}</Text>
			</View>
		</Pressable>
	);
};

const style = StyleSheet.create({
	container: {
		width: "100%",
		alignItems: "center",
		flexDirection: "row",

		padding: 10
	},
	cover: {
		height: windowWidth * 0.1,
		width: windowWidth * 0.1
	},
	text: {
		color: COLOR_PALETTE.white,
		fontSize: 14
	},
	songInfoContainer: {
		width: "70%",
		paddingLeft: 8
	}
});
SongHit.propTypes = {
	hit: PropTypes.object.isRequired
};

export default connectHighlight(SongHit);
