import React, { useEffect, useState } from "react";

import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	Dimensions,
	ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TrackPlayer, {
	State,
	usePlaybackState
} from "react-native-track-player";

import SliderComp from "./Slider";
import GlobalStyles from "../../utils/GlobalStyles";

import { COLOR_PALETTE, icons } from "../../utils/constants";

const windowWidth = Dimensions.get("window").width;

function Player() {
	const playbackState = usePlaybackState();

	const [currentTrack, setCurrentTrack] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getCurrentTrack = async () => {
			if (playbackState === State.Playing) {
				const currentTrackIndex = await TrackPlayer.getCurrentTrack();
				setCurrentTrack(await TrackPlayer.getTrack(currentTrackIndex));
				setIsLoading(false);
			} else if (playbackState === State.Connecting) {
				setIsLoading(true);
			}
		};

		getCurrentTrack();
	}, [playbackState]);

	const handleSkipForwardOnPress = async () => {
		try {
			await TrackPlayer.skipToNext();
		} catch (error) {
			await TrackPlayer.skip(0);
		}
	};

	const handleSkipBackwardOnPress = async () => {
		try {
			await TrackPlayer.skipToPrevious();
		} catch (error) {
			await TrackPlayer.skip(0);
		}
	};

	const handlePlayButtonOnPress = async () => {
		playbackState === State.Playing
			? await TrackPlayer.pause()
			: await TrackPlayer.play();
	};

	const renderControls = () => (
		<View style={styles.controls}>
			<Pressable onPress={handleSkipBackwardOnPress}>
				<Icon name={icons.back} color={COLOR_PALETTE.white} size={24} />
			</Pressable>
			<Pressable onPress={handlePlayButtonOnPress} testID="playButton">
				<Icon
					name={playbackState === State.Playing ? icons.pause : icons.play}
					color={COLOR_PALETTE.white}
					size={40}
				/>
			</Pressable>
			<Pressable onPress={handleSkipForwardOnPress}>
				<Icon name={icons.forward} color={COLOR_PALETTE.white} size={24} />
			</Pressable>
		</View>
	);

	return (
		currentTrack && (
			<View style={styles.player} testID="player">
				{isLoading ? (
					<View style={styles.activityIndicatorContainer}>
						<ActivityIndicator size="small" />
					</View>
				) : (
					<View style={styles.songDetails}>
						<Image
							style={styles.songPlayerImage}
							source={{ uri: currentTrack?.artwork }}
						/>
						<View style={styles.songInfoContainer}>
							<Text style={[styles.songName, GlobalStyles.whiteText]}>
								{currentTrack?.title}
							</Text>
							<Text style={[styles.artistName, GlobalStyles.whiteText]}>
								{currentTrack?.artist}
							</Text>
						</View>
						{renderControls()}
					</View>
				)}
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
	},
	activityIndicatorContainer: {
		height: 52,
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	}
});
