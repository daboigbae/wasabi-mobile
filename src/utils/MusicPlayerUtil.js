import { Alert } from "react-native";
import TrackPlayer, { Capability } from "react-native-track-player";

/**
 *
 *  Everything that involves playing music revolves around
 * 	playlists, so everytime we play music,
 *  we pass the playlist to the player and play at the specific index.
 *  0 as a default for songs, or starting a playlist from the beginning
 *  */

export const handlePlaylistChange = async (playlist, index = 0) => {
	try {
		await TrackPlayer.stop();
		await TrackPlayer.reset();
		await TrackPlayer.add(playlist);
		await TrackPlayer.skip(index);
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
