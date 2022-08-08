import React from "react";
import { Pressable } from "react-native";

import PropTypes from "prop-types";
import FastImage from "react-native-fast-image";

const Playlist = ({ playlist, testID, onPress }) => (
	<Pressable
		className="h-auto w-auto mr-4 mt-4 flex-row"
		onPress={onPress}
		testID={testID}
	>
		<FastImage
			className="h-48 w-48 rounded-md"
			source={{ uri: playlist?.artwork }}
			resizeMode={FastImage.resizeMode.cover}
		/>
	</Pressable>
);

Playlist.propTypes = {
	playlist: PropTypes.object.isRequired,
	onPress: PropTypes.func.isRequired,
	testID: PropTypes.string
};

export default Playlist;
