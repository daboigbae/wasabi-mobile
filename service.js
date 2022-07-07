import TrackPlayer from 'react-native-track-player';
import {getCurrentSong} from './frontend/helpers/playerControls';
import {setSong} from './frontend/redux/actions';
import {Store} from './frontend/redux/store';

module.exports = async function () {
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
    await Store.dispatch(setSong(currentSong));
  });

  TrackPlayer.addEventListener('remote-previous', async () => {
    await TrackPlayer.skipToPrevious();
    const currentSong = await getCurrentSong();
    await Store.dispatch(setSong(currentSong));
  });
};
