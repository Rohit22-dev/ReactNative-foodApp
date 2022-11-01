import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FoodItems = props => {
  const {name, price, image} = props.food;
  const [cartItems, setCartitems] = useState([]);

  const handlePress = () => {
    const newCartItem = [];
    newCartItem.push({
      image,
      name,
      price,
    });
    setCartitems(newCartItem);
  };

  return (
    <View style={styles.foodData}>
      <View style={[styles.foodBox, styles.shadowProp]}>
        <Image source={image} style={styles.fImg} />

        <View style={styles.fData}>
          <View style={styles.fDataLeft}>
            <Text style={{fontWeight: '800', color: 'black'}}>{name}</Text>
            <Text style={{fontWeight: '400', color: 'black'}}>Rating</Text>
          </View>
          <View style={styles.fDataRight}>
            <Text style={{fontWeight: '800', color: 'black'}}>{price}</Text>
            <Icon
              name="add-box"
              size={25}
              color="#1AC073"
              onPress={handlePress}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodItems;
