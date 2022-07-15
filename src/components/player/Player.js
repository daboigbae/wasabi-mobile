import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TrackPlayer, {
	Event,
	State,
	usePlaybackState,
	useTrackPlayerEvents
} from "react-native-track-player";

import {
	getCurrentSong,
	handlePause,
	handleSkipBackward,
	handleSkipForward,
	playSelectedSong
} from "../../utils/MusicPlayerUtil";
import SongLibrary from "../../assets/SongLibrary";
import { palette } from "../../utils/palette";
import SliderComp from "./Slider";
import GlobalStyles from "../../styles/GlobalStyles";
import { setSongPlaying } from "../../redux/songPlayingSlice";
import { icons } from "../../constants/constants";

import PropTypes from "prop-types";

function Player({ selectedSong }) {
	const dispatch = useDispatch();
	const playbackState = usePlaybackState();

	const selectedSongItem = useMemo(async () => {
		await playSelectedSong(selectedSong.index);
		return selectedSong?.item;
	}, [selectedSong]);

	const getPlayButtonIcon = useMemo(
		() => (playbackState === State.Playing ? icons.pause : icons.play),
		[playbackState]
	);

	const [songIndex, setSongIndex] = useState();

	const resetPlayer = async () => {
		playSelectedSong(0);
		setSongIndex(0);
		const currentSong = await getCurrentSong();
		dispatch(setSongPlaying(currentSong));
	};

	const isPlaylistOver = () => songIndex + 1 === SongLibrary.length;

	const handleSkipForwardOnPress = async () => {
		if (isPlaylistOver()) {
			await resetPlayer();
		} else {
			await handleSkipForward();
			setSongIndex(songIndex + 1);
		}
	};

	const handleSkipBackwardOnPress = async () => {
		await handleSkipBackward();
		setSongIndex(songIndex - 1);
		const currentSong = await getCurrentSong();
		dispatch(setSongPlaying(currentSong));
	};

	useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
		if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
			const track = await TrackPlayer.getTrack(event.nextTrack);
			dispatch(setSongPlaying(track));
		}
	});

	return (
		<View style={styles.player}>
			<Image
				style={styles.songPlayerImage}
				source={{ uri: selectedSongItem?.artwork }}
			/>
			<View style={styles.songDetails}>
				<Text style={[styles.songName, GlobalStyles.whiteText]}>
					{selectedSongItem?.title}
				</Text>
				<Text style={[styles.artistName, GlobalStyles.whiteText]}>
					{selectedSongItem?.artist}
				</Text>
				<SliderComp />
				<View style={styles.controls}>
					<Pressable onPress={handleSkipBackwardOnPress}>
						<Icon name={icons.back} color={palette.lightgray} size={24} />
					</Pressable>
					<Pressable onPress={() => handlePause(playbackState)}>
						<Icon
							name={getPlayButtonIcon}
							color={palette.lightgray}
							size={40}
						/>
					</Pressable>
					<Pressable onPress={handleSkipForwardOnPress}>
						<Icon name={icons.forward} color={palette.lightgray} size={24} />
					</Pressable>
				</View>
			</View>
		</View>
	);
}

Player.propTypes = {
	selectedSong: PropTypes.object
};

export default Player;

const styles = StyleSheet.create({
	player: {
		height: 150,
		backgroundColor: palette.dark.secondary,
		width: "100%",
		position: "absolute",
		bottom: 0,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
		shadowRadius: 2,
		shadowOffset: {
			width: 0,
			height: -8
		},
		shadowColor: palette.shadow,
		elevation: 20
	},

	songPlayerImage: {
		height: 150,
		width: 150
	},

	songDetails: {
		paddingTop: 12,
		paddingBottom: 12,
		height: 150,
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "flex-start"
	},

	songName: {
		marginLeft: 16,
		fontWeight: "bold"
	},

	artistName: {
		marginLeft: 16,
		fontWeight: "300"
	},

	controls: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%"
	}
});
