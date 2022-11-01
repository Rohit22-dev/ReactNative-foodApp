import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Home from './components/Home';
import Cart from './components/Cart/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreeen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import Navigation from './Navigation/Index.js'



const App = () => {
  const Stack = createNativeStackNavigator();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <View style={styles.loadContainer}>
          <Text style={styles.loadText}>FAVfood</Text>
        </View>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen
              name="home"
              component={Navigation}
              options={{headerShown: false}}
            />
            <Stack.Screen name="cart" component={Cart} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1AC073',
  },
  loadText: {
    color: '#fff',
    fontSize: 80,
    fontFamily: 'SquadaOne-Regular',
  },
});

export default App;
