import {View, StyleSheet} from 'react-native';
import React from 'react';

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    marginTop: 16,
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray',
  },
});
