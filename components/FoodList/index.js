import {View, FlatList, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import foods from './foods';
import FoodItems from '../FoodItems';

const FoodList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fHead}>Choose a Delight</Text>
      <FlatList
        data={foods}
        renderItem={({item}) => <FoodItems food={item} />}
        showsVerticalScrollIndicator={false}
        // snapToAlignment={'start'}
        // decelerationRate={'fast'}
        // snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default FoodList;
