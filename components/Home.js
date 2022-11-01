import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Main from './Main';
import FoodList from './FoodList';
import Footer from './Footer';

const Home = props => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Main navigation={props.navigation} />
        <FoodList />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scroll: {
    width: '100%',
  },
});

export default Home;
