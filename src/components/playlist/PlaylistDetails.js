import React from "react";
import { Text, View } from "react-native";

import FastImage from "react-native-fast-image";
import PropTypes from "prop-types";

import PlaylistPlayIcon from "../common/icons/PlaylistPlayIcon";

const PlaylistDetails = ({ playlist }) => {
	return (
		<>
			<View className="flex-1 justify-center items-center mb-4">
				<FastImage
					className="h-48 w-48 rounded-md mt-8"
					source={{
						uri: playlist?.artwork
					}}
					resizeMode={FastImage.resizeMode.cover}
				/>
			</View>
			<Text className="text-white text-xl tracking-wider">
				{playlist?.name}
			</Text>
			<Text className="text-white text-base mt-2">
				Songs: {playlist?.songs?.length}
			</Text>
			<View className="mt-2 flex-row justify-end items-center mb-4">
				<PlaylistPlayIcon playlist={playlist?.songs} />
			</View>
		</>
	);
};

PlaylistDetails.propTypes = {
	playlist: PropTypes.object.isRequired
};

export default PlaylistDetails;
