import TrackPlayer, { Capability } from "react-native-track-player";
import { library } from "../utils/Library";

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

			TrackPlayer.add(library);
		});
	} catch (err) {
		console.log(err);
	}
};
