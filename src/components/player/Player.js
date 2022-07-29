import React, { useMemo, useState } from "react";

import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	Dimensions
} from "react-native";
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
const windowWidth = Dimensions.get("window").width;

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

	const renderControls = () => (
		<View style={styles.controls}>
			<Pressable onPress={handleSkipBackwardOnPress}>
				<Icon name={icons.back} color={COLOR_PALETTE.white} size={24} />
			</Pressable>
			<Pressable onPress={() => handlePause(playbackState)} testID="playButton">
				<Icon name={getPlayButtonIcon} color={COLOR_PALETTE.white} size={40} />
			</Pressable>
			<Pressable onPress={handleSkipForwardOnPress}>
				<Icon name={icons.forward} color={COLOR_PALETTE.white} size={24} />
			</Pressable>
		</View>
	);

	return (
		currentSong && (
			<View style={styles.player} testID="player">
				<View style={styles.songDetails}>
					<Image
						style={styles.songPlayerImage}
						source={{ uri: currentSong?.artwork }}
					/>
					<View style={styles.songInfoContainer}>
						<Text style={[styles.songName, GlobalStyles.whiteText]}>
							{currentSong?.title}
						</Text>
						<Text style={[styles.artistName, GlobalStyles.whiteText]}>
							{currentSong?.artist}
						</Text>
					</View>
					{renderControls()}
				</View>
				<SliderComp />
			</View>
		)
	);
}

export default Player;

const styles = StyleSheet.create({
	player: {
		borderTopColor: COLOR_PALETTE.purple,
		borderTopWidth: 4,
		backgroundColor: COLOR_PALETTE.dark.secondary,
		width: "100%",
		position: "absolute",
		bottom: 0,
		alignItems: "center",
		shadowRadius: 2,
		shadowColor: COLOR_PALETTE.shadow,
		elevation: 20
	},

	songDetails: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center"
	},
	songPlayerImage: {
		width: windowWidth * 0.15,
		height: windowWidth * 0.15
	},

	songInfoContainer: {
		flexDirection: "column",
		width: "50%",
		paddingHorizontal: 8
	},
	songName: {
		fontWeight: "bold"
	},

	artistName: {
		fontWeight: "300"
	},

	controls: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "35%",
		paddingEnd: 16,
		paddingTop: 8,
		alignItems: "center"
	}
});
