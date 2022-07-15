import TrackPlayer, { State } from "react-native-track-player";
import { setSongPlaying } from "../redux/songPlayingSlice";
import store from "../redux/store";

const TIME_OUT_BETWEEN_SKIPS_IN_MILLISECONDS = 1000;

export const getCurrentSong = async () => {
	const current = await TrackPlayer.getCurrentTrack();
	const song = await TrackPlayer.getTrack(current);

	return song;
};

export const handlePlaylistChange = async (playlist) => {
	await TrackPlayer.add(playlist);
};

export const playSelectedSong = async (selectedSong) => {
	await TrackPlayer.pause();

	await TrackPlayer.skip(selectedSong);
	await new Promise((r) =>
		setTimeout(r, TIME_OUT_BETWEEN_SKIPS_IN_MILLISECONDS)
	);

	await TrackPlayer.play();

	const currentSong = await getCurrentSong();
	store.dispatch(setSongPlaying(currentSong));
};

export const handleSkipForward = async () => {
	await TrackPlayer.skipToNext();
	await new Promise((r) =>
		setTimeout(r, TIME_OUT_BETWEEN_SKIPS_IN_MILLISECONDS)
	);

	await TrackPlayer.play();

	const currentSong = await getCurrentSong();
	store.dispatch(setSongPlaying(currentSong));
};

export const handleSkipBackward = async () => {
	await TrackPlayer.skipToPrevious();
	await new Promise((r) =>
		setTimeout(r, TIME_OUT_BETWEEN_SKIPS_IN_MILLISECONDS)
	);

	await TrackPlayer.play();

	const currentSong = await getCurrentSong();
	store.dispatch(setSongPlaying(currentSong));
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
