import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryButtons from '../components/CategoryButtons';
import TrendingNow from '../components/TrendingNow';
import TrendingCard from '../components/TrendingCard';
import BottomNavBar from '../components/BottomNavBar';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Banner />
        <CategoryButtons />
        <TrendingNow />
        <TrendingCard
          match="Kolkata to win the match vs Mumbai?"
          rateYes="5.3"
          rateNo="4.7"
        />
        <TrendingCard
          match="PSG vs Dortmund"
          rateYes="3.2"
          rateNo="2.9"
        />
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

export default HomeScreen;
