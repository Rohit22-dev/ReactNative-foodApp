import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const Main = ({navigation}) => {


  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.navbar}>
        <Text style={styles.nTitle}>FAVfood</Text>
        <View style={styles.nIcon}>
          <Icon1 name="search" size={25} color="#fff" />
          <Icon2
            name="shopping-outline"
            size={25}
            color="#fff"
            onPress={() => navigation.navigate('cart')}
          />
        </View>
      </View>

      <View style={styles.hData}>
        <Image
          style={styles.hImg}
          source={require('../../assets/images/chef.png')}
        />
        <Text style={styles.hDataTitle}>Authentic Home food in India</Text>
        <Text style={styles.hDataText}>
          FAVfood is a courier service in which authentic home cook food is
          delivered to a customer.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Main;
