import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrendingNow = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Now</Text>
      {/* Add Trending Cards here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default TrendingNow;
