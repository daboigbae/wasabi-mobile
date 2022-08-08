import React, { useEffect, useState } from "react";

import { View, Text, Pressable, ActivityIndicator } from "react-native";

import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/FontAwesome";

import TrackPlayer, {
	State,
	usePlaybackState
} from "react-native-track-player";

import SliderComp from "./Slider";
import GlobalStyles from "../../utils/GlobalStyles";

import { COLOR_PALETTE, icons } from "../../utils/constants";

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
		<View className="flex-row justify-between w-[35%] pr-4 pt-2 items-center">
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
			<View
				className="border-t-4 border-t-[#B026FF] bg-[#1f1f32] w-full items-center shadow-md "
				testID="player"
			>
				{isLoading ? (
					<View className="h-[52px] w-full items-center justify-center">
						<ActivityIndicator size="small" />
					</View>
				) : (
					<View className="w-full flex-row items-center">
						<FastImage
							className="w-[50px] h-[50px]"
							source={{
								uri: currentTrack?.artwork,
								priority: FastImage.priority.high
							}}
							resizeMode={FastImage.resizeMode.cover}
						/>
						<View className="flex-col w-1/2 px-4">
							<Text style={[GlobalStyles.whiteText]} className="font-bold">
								{currentTrack?.title}
							</Text>
							<Text style={[GlobalStyles.whiteText]} className="font-light">
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
