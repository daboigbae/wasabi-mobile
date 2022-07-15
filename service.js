import TrackPlayer from 'react-native-track-player';
import { setSongPlaying } from './frontend/redux/songPlayingSlice';
import { getCurrentSong } from './frontend/helpers/playerControls';
import store from './frontend/redux/store';

const service = async () => {
	TrackPlayer.addEventListener(
		'remote-play',
		async () => await TrackPlayer.play(),
	);

	TrackPlayer.addEventListener(
		'remote-pause',
		async () => await TrackPlayer.pause(),
	);

	TrackPlayer.addEventListener(
		'remote-stop',
		async () => await TrackPlayer.stop(),
	);

	TrackPlayer.addEventListener('remote-next', async () => {
		await TrackPlayer.skipToNext();
		const currentSong = await getCurrentSong();
		store.dispatch(setSongPlaying(currentSong));
	});

	TrackPlayer.addEventListener('remote-previous', async () => {
		await TrackPlayer.skipToPrevious();
		const currentSong = await getCurrentSong();
		store.dispatch(setSongPlaying(currentSong));
	});
};

module.exports = service;
