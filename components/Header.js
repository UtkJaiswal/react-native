import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={{ uri: 'https://example.com/avatar.png' }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      {/* <Text style={styles.time}>9:41</Text> */}
      <TouchableOpacity>
        <Image
          source={{ uri: 'https://example.com/bell.png' }}
          style={styles.bell}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  bell: {
    width: 24,
    height: 24,
  },
  time: {
    fontSize: 16,
    color: '#000',
  },
});

export default Header;
