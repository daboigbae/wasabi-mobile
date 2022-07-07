import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  getCurrentSong,
  handlePause,
  handleSelectedSong,
  handleSkipBackward,
  handleSkipForward,
} from '../../helpers/playerControls';
import Icon from 'react-native-vector-icons/FontAwesome';
import TrackPlayer, {
  Event,
  State,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {library} from '../../helpers/Library';
import {useSelector, useDispatch} from 'react-redux';
import {setSong} from '../../redux/actions';
import SliderComp from './Slider';

export default function Player({playlist, selectedSong}) {
  const {song} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  let playbackState = usePlaybackState();

  const [songIndex, setSongIndex] = useState();

  const handleNext = async () => {
    if (songIndex + 1 === library.length) {
      handleSelectedSong(0);
      setSongIndex(0);
      const currentSong = await getCurrentSong();

      dispatch(setSong(currentSong));
    } else {
      await handleSkipForward();
      setSongIndex(songIndex + 1);
    }
  };

  const handlePrev = async () => {
    await handleSkipBackward();
    setSongIndex(songIndex - 1);
    const currentSong = await getCurrentSong();
    dispatch(setSong(currentSong));
  };

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      dispatch(setSong(track));
    }
  });

  useEffect(() => {
    const handleSong = async () => {
      if (selectedSong !== null) {
        setSongIndex(selectedSong.index);
        handleSelectedSong(selectedSong.index);
      }
    };
    handleSong();
  }, [selectedSong]);

  return (
    <View style={styles.player}>
      <Image style={styles.songPlayerImage} source={{uri: song?.artwork}} />
      <View style={styles.songDetails}>
        <Text style={styles.songName}>{song?.title}</Text>
        <Text style={styles.artistName}>{song?.artist}</Text>
        <SliderComp />
        <View style={styles.controls}>
          <TouchableOpacity onPress={handlePrev}>
            <Icon name={'step-backward'} color="black" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePause(playbackState)}>
            <Icon
              name={
                playbackState === State.Playing ? 'pause-circle' : 'play-circle'
              }
              color="black"
              size={40}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext}>
            <Icon name={'step-forward'} color="black" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  player: {
    height: 150,

    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowColor: '#000000',
    elevation: 20,
  },

  songPlayerImage: {
    height: 150,
    width: 150,
  },

  songDetails: {
    paddingTop: 12,
    paddingBottom: 12,
    height: 150,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  songName: {
    marginLeft: 16,
    fontWeight: 'bold',
  },

  artistName: {
    marginLeft: 16,
    fontWeight: '300',
  },

  controls: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});
