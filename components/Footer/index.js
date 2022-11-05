import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const onAccountPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Icon style={styles.fOptions} name="home" size={25} color="#fff" />
      <Icon1 style={styles.fOptions} name="filter" size={25} color="#fff" />
      <Icon2
        style={styles.fOptions}
        name="shopping-cart"
        size={25}
        color="#fff"
      />
      <Icon3
        style={styles.fOptions}
        name="account-settings-outline"
        size={25}
        color="#fff"
        onPress={onAccountPressed}
      />
      <Icon4
        style={styles.fOptions}
        name="information-variant"
        size={25}
        color="#fff"
      />
    </View>
  );
};

export default Footer;
