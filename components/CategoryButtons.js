import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const categories = [
  { name: 'Cricket', icon: 'https://example.com/cricket.png' },
  { name: 'Crypto', icon: 'https://example.com/crypto.png' },
  { name: 'Football', icon: 'https://example.com/football.png' },
  { name: 'Stocks', icon: 'https://example.com/stocks.png' },
  { name: 'Economy', icon: 'https://example.com/economy.png' },
];

const CategoryButtons = () => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Image source={{ uri: category.icon }} style={styles.icon} />
          <Text style={styles.text}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  button: {
    alignItems: 'center',
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default CategoryButtons;
