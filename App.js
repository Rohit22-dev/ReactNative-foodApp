import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Home from './components/Home';
import Cart from './components/Cart/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreeen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import NewPasswordScreen from './screens/NewPasswordScreen';
import UserProvider from './provider/userProvider';
import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';

Amplify.configure({
  ...awsExports
});

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
        <UserProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="home"
              screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen
                name="ConfirmEmail"
                component={ConfirmEmailScreen}
              />
              <Stack.Screen name="ForgotPwd" component={ForgotPasswordScreen} />
              <Stack.Screen name="NewPwd" component={NewPasswordScreen} />
              <Stack.Screen name="cart" component={Cart} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
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
