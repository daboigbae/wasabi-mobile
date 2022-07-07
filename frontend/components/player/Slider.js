import {StyleSheet} from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import TrackPlayer, {useProgress} from 'react-native-track-player';

export default function SliderComp() {
  const progress = useProgress();
  return (
    <Slider
      style={styles.slider}
      value={progress.position}
      minimumValue={0}
      maximumValue={progress.duration}
      onSlidingComplete={async value => {
        await TrackPlayer.seekTo(value);
      }}
    />
  );
}

const styles = StyleSheet.create({
  slider: {
    width: '100%',
  },
});
