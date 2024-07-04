import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TrendingCard = ({ match, rateYes, rateNo }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.match}>{match}</Text>
      <View style={styles.ratesContainer}>
        <TouchableOpacity style={styles.rateButtonYes}>
          <Text style={styles.rateText}>Yes ₹ {rateYes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rateButtonNo}>
          <Text style={styles.rateText}>NO ₹ {rateNo}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  match: {
    fontSize: 16,
    marginBottom: 8,
  },
  ratesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rateButtonYes: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
  },
  rateButtonNo: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 8,
  },
  rateText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default TrendingCard;
