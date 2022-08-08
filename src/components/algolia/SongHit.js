import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { connectHighlight } from "react-instantsearch-native";
import FastImage from "react-native-fast-image";

import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

import { handlePlaylistChange } from "../../utils/MusicPlayerUtil";

const windowWidth = Dimensions.get("window").width;

const SongHit = ({ hit }) => {
	const onPress = async () => {
		await handlePlaylistChange([hit]);
	};

	return (
		<Pressable onPress={onPress}>
			<View className="flex-row w-full p-2 items-center ">
				<FastImage
					style={style.cover}
					source={{ uri: hit?.artwork }}
					resizeMode={FastImage.resizeMode.cover}
				/>
				<View className="pl-2">
					<Text className="text-white" numberOfLines={1}>
						{hit.title}
					</Text>
					<Text className="text-white">{hit?.artist}</Text>
				</View>
			</View>
		</Pressable>
	);
};

const style = StyleSheet.create({
	cover: {
		height: windowWidth * 0.1,
		width: windowWidth * 0.1
	}
});
SongHit.propTypes = {
	hit: PropTypes.object.isRequired
};

export default connectHighlight(SongHit);
