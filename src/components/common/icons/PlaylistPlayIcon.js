import React from "react";
import PropTypes from "prop-types";

import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLOR_PALETTE } from "../../../utils/constants";
import { handlePlaylistChange } from "../../../utils/MusicPlayerUtil";

const PlaylistPlayIcon = ({ playlist }) => {
	const handlePlaylistOnPress = async () => {
		await handlePlaylistChange(playlist);
	};
	return (
		<Pressable onPress={handlePlaylistOnPress}>
			<Icon name="play-circle-fill" color={COLOR_PALETTE.lightblue} size={64} />
		</Pressable>
	);
};

PlaylistPlayIcon.propTypes = {
	playlist: PropTypes.arrayOf(PropTypes.object)
};

export default PlaylistPlayIcon;
