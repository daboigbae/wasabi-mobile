import React from 'react';
import {View, StyleSheet} from 'react-native';
import {palette} from '../../utils/palette';

const Divider = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    marginTop: 16,
    width: '100%',
    height: 1,
    backgroundColor: palette.lightgray,
  },
});
