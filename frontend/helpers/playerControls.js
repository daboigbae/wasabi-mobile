import TrackPlayer, { State } from 'react-native-track-player';
import { setSongPlaying } from '../redux/songPlayingSlice';
import store from '../redux/store';

export const getCurrentSong = async () => {
	const current = await TrackPlayer.getCurrentTrack();
	const song = await TrackPlayer.getTrack(current);

	return song;
};

export const handlePlaylistChange = async (playlist) => {
	await TrackPlayer.add(playlist);
};

export const playSelectedSong = async (selectedSong) => {
	await TrackPlayer.skip(selectedSong);

	const currentSong = await getCurrentSong();
	store.dispatch(setSongPlaying(currentSong));

	await TrackPlayer.play();
};

export const handleSkipForward = async () => {
	await TrackPlayer.skipToNext();

	const currentSong = await getCurrentSong();
	store.dispatch(setSongPlaying(currentSong));

	await TrackPlayer.play();
};

export const handleSkipBackward = async () => {
	await TrackPlayer.skipToPrevious();

	const currentSong = await getCurrentSong();
	store.dispatch(setSongPlaying(currentSong));

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
