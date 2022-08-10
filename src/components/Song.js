import React from "react";
import { Pressable, Text, View } from "react-native";

import GlobalStyles from "../utils/GlobalStyles";
import PropTypes from "prop-types";
import { handlePlaylistChange } from "../utils/MusicPlayerUtil";
import FastImage from "react-native-fast-image";

const Song = ({ playlist, song, index, testID }) => {
	const handleOnPress = async () => {
		await handlePlaylistChange(playlist, index);
	};

	return (
		<Pressable
			className="h-auto w-full items-center mt-4 flex-row"
			onPress={handleOnPress}
			testID={testID}
		>
			<FastImage
				className="h-[90px] w-[90px]"
				source={{ uri: song?.artwork, priority: FastImage.priority.high }}
				resizeMode={FastImage.resizeMode.cover}
			/>
			<View className="p-4">
				<Text
					className="text-lg w-full font-bold"
					style={[GlobalStyles.whiteText]}
					numberOfLines={2}
				>
					{song?.title}
				</Text>
				<Text
					className="text-sm font-light"
					style={[GlobalStyles.whiteText]}
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
