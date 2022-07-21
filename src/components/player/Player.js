import React, { useMemo, useState } from "react";

import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TrackPlayer, {
	Event,
	State,
	usePlaybackState,
	useTrackPlayerEvents
} from "react-native-track-player";

import {
	handlePause,
	handleSkipBackward,
	handleSkipForward,
	playSelectedSong
} from "../../utils/MusicPlayerUtil";

import SongLibrary from "../../assets/SongLibrary";

import SliderComp from "./Slider";
import GlobalStyles from "../../utils/GlobalStyles";

import { COLOR_PALETTE, icons } from "../../utils/constants";

function Player() {
	const playbackState = usePlaybackState();
	const [currentSong, setCurrentSong] = useState();

	const getPlayButtonIcon = useMemo(
		() => (playbackState === State.Playing ? icons.pause : icons.play),
		[playbackState]
	);

	const resetPlayer = async () => {
		playSelectedSong(0);
	};

	const isPlaylistOver = () => 0 + 1 === SongLibrary.length;

	const handleSkipForwardOnPress = async () => {
		if (isPlaylistOver()) {
			await resetPlayer();
		} else {
			await handleSkipForward();
		}
	};

	const handleSkipBackwardOnPress = async () => {
		await handleSkipBackward();
	};

	useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
		if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
			const track = await TrackPlayer.getTrack(event.nextTrack);
			setCurrentSong(track);
		}
	});

	return (
		currentSong && (
			<View style={styles.player} testID="player">
				<Image
					style={styles.songPlayerImage}
					source={{ uri: currentSong?.artwork }}
				/>
				<View style={styles.songDetails}>
					<Text style={[styles.songName, GlobalStyles.whiteText]}>
						{currentSong?.title}
					</Text>
					<Text style={[styles.artistName, GlobalStyles.whiteText]}>
						{currentSong?.artist}
					</Text>
					<SliderComp />
					<View style={styles.controls}>
						<Pressable onPress={handleSkipBackwardOnPress}>
							<Icon
								name={icons.back}
								color={COLOR_PALETTE.lightgray}
								size={24}
							/>
						</Pressable>
						<Pressable
							onPress={() => handlePause(playbackState)}
							testID="playButton"
						>
							<Icon
								name={getPlayButtonIcon}
								color={COLOR_PALETTE.lightgray}
								size={40}
							/>
						</Pressable>
						<Pressable onPress={handleSkipForwardOnPress}>
							<Icon
								name={icons.forward}
								color={COLOR_PALETTE.lightgray}
								size={24}
							/>
						</Pressable>
					</View>
				</View>
			</View>
		)
	);
}

export default Player;

const styles = StyleSheet.create({
	player: {
		height: 150,
		backgroundColor: COLOR_PALETTE.dark.secondary,
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
		shadowColor: COLOR_PALETTE.shadow,
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
