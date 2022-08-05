import React from "react";
import { Text, StyleSheet, View, Dimensions, PixelRatio } from "react-native";
import PropTypes from "prop-types";
import { connectHighlight } from "react-instantsearch-native";
import FastImage from "react-native-fast-image";

import { COLOR_PALETTE } from "../../utils/constants";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { handlePlaylistChange } from "../../utils/MusicPlayerUtil";

const windowWidth = Dimensions.get("window").width;

const SongHit = ({ hit }) => {
	const onPress = async () => {
		await handlePlaylistChange([hit]);
	};

	return (
		<Pressable style={style.container} onPress={onPress}>
			<FastImage
				style={style.cover}
				source={{ uri: hit?.artwork }}
				resizeMode={FastImage.resizeMode.cover}
			/>
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
		fontSize: 14 * PixelRatio.getFontScale()
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
