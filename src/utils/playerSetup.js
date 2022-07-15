import TrackPlayer, { Capability } from "react-native-track-player";
import SongLibrary from "../assets/SongLibrary";

export const playerSetup = async () => {
	try {
		await TrackPlayer.setupPlayer().then(() => {
			TrackPlayer.updateOptions({
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

			TrackPlayer.add(SongLibrary);
		});
	} catch (err) {
		console.log(err);
	}
};
