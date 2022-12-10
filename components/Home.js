import {FlatList, StyleSheet, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Main from './Main';
import Footer from './Footer';
import foods from './FoodList/foods';
import FoodItems from './FoodItems';

const Home = props => {

  
 
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          <Main navigation={props.navigation} />,
          <Text style={styles.fHead}>Choose a Delight</Text>,
          ...foods,
        ]}
        renderItem={({item, index}) =>
          index <= 1 ? item : <FoodItems food={item} />
        }
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        style={styles.scroll}
      />
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
  fHead: {
    color: '#1AC073',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default Home;
