import TrackPlayer, { State, Capability } from "react-native-track-player";

import SongLibrary from "../assets/SongLibrary";

const TIME_OUT_BETWEEN_SKIPS_IN_MILLISECONDS = 1000;

export const handlePlaylistChange = async (playlist) => {
	await TrackPlayer.add(playlist);
};

export const playSelectedSong = async (selectedSong) => {
	await TrackPlayer.stop();
	await TrackPlayer.skip(selectedSong);

	await new Promise((r) =>
		setTimeout(r, TIME_OUT_BETWEEN_SKIPS_IN_MILLISECONDS)
	);

	await TrackPlayer.play();
};

export const handleSkipForward = async () => {
	await TrackPlayer.skipToNext();

	await new Promise((r) =>
		setTimeout(r, TIME_OUT_BETWEEN_SKIPS_IN_MILLISECONDS)
	);

	await TrackPlayer.play();
};

export const handleSkipBackward = async () => {
	await TrackPlayer.skipToPrevious();

	await new Promise((r) =>
		setTimeout(r, TIME_OUT_BETWEEN_SKIPS_IN_MILLISECONDS)
	);

	await TrackPlayer.play();
};

export const handlePause = async (playbackState) => {
	if (playbackState === State.Paused) {
		await TrackPlayer.play();
	} else {
		await TrackPlayer.pause();
	}
};

export const handlePlay = async () => {
	await TrackPlayer.play();
};

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
		// TODO handle error
	}
};
