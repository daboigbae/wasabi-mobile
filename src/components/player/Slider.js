import React from "react";
import { View } from "react-native";
import TrackPlayer, { useProgress } from "react-native-track-player";
import Slider from "@react-native-community/slider";

const SliderComp = () => {
	const progress = useProgress();

	const handleSlideOnRelease = async (value) => {
		await TrackPlayer.seekTo(value);
	};

	return (
		<View className="w-[95%] py-4">
			<Slider
				value={progress.position}
				minimumValue={0}
				maximumValue={progress.duration}
				onSlidingComplete={handleSlideOnRelease}
			/>
		</View>
	);
};

export default SliderComp;
