import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
import FoodItems from '../FoodItems';

const Cart = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.cHead}>{props.cartItems}</Text>
    </View>
  );
};

export default Cart;
