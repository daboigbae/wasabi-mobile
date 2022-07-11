import React from 'react';
import {StyleSheet} from 'react-native';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import Slider from '@react-native-community/slider';

const SliderComp = () => {
  const progress = useProgress();

  const handleSlideOnRelease = async value => {
    await TrackPlayer.seekTo(value);
  };

  return (
    <Slider
      style={styles.slider}
      value={progress.position}
      minimumValue={0}
      maximumValue={progress.duration}
      onSlidingComplete={handleSlideOnRelease}
    />
  );
};

export default SliderComp;

const styles = StyleSheet.create({
  slider: {
    width: '100%',
  },
});
