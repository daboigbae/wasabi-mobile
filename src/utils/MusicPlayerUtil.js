import { Alert } from "react-native";
import TrackPlayer, { Capability } from "react-native-track-player";

export const handlePlaylistChange = async (playlist) => {
	try {
		await TrackPlayer.stop();
		await TrackPlayer.reset();
		await TrackPlayer.add(playlist);
		await TrackPlayer.play();
	} catch (error) {
		Alert.alert("Something went wrong");
	}
};

export const playerSetup = async () => {
	try {
		await TrackPlayer.setupPlayer().then(() => {
			TrackPlayer.updateOptions({
				capabilities: [
					Capability.Play,
					Capability.Pause,
					Capability.SkipToNext,
					Capability.SkipToPrevious
				],
				compactCapabilities: [
					Capability.Play,
					Capability.Pause,
					Capability.SkipToNext,
					Capability.SkipToPrevious
				],
				notificationCapabilities: [
					Capability.Play,
					Capability.Pause,
					Capability.SkipToNext,
					Capability.SkipToPrevious
				]
			});
		});
	} catch (err) {
		// TODO handle error
	}
};
