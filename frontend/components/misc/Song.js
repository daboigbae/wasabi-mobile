import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Song({song, index, handleSongSelect}) {
  return (
    <TouchableOpacity style={styles.song} onPress={handleSongSelect}>
      <Image style={styles.songImage} source={{uri: song.artwork}} />
      <View style={styles.songDetails}>
        <Text style={styles.songName}>{song.title}</Text>
        <Text style={styles.artistName}>{song.artistName || 'Anonymous'}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  song: {
    height: 'auto',
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
  },

  songImage: {
    height: 90,
    width: 90,
    borderRadius: 8,
  },

  songDetails: {
    padding: 8,
  },

  songName: {
    fontSize: 14,
    width: '95%',
    fontWeight: 'bold',
  },

  artistName: {
    fontSize: 12,
    fontWeight: '300',
  },
});
