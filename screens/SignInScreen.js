import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../assets/images/fav2.png';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import axios from 'axios';
import md5 from 'md5';

const SignInScreen = () => {
  // const {user, setUser} = useContext('');
  const [load, setLoad] = useState(false);

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  // useEffect(() => {
  //   Auth.signIn('qwerty', 'Qwer123@').then(res =>
  //     console.log(res),
  //   );
  // }, []);

  const onSignInPressed = async data => {
    if (load) {
      return;
    }
    setLoad(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (e) {
      console.log(e);
      Alert.alert('Oops', e.message);
    }
    setLoad(false);

    navigation.navigate('Home');
    // setUser(data);
  };
  const onForgotPwdPressed = () => {
    navigation.navigate('ForgotPwd');
  };
  const onSignInGoogle = () => {
    console.warn('Sign In with Google');
  };
  const onSignInFacebook = () => {
    console.warn('Sign In with Facebook');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: '4',
              message: 'Password should be minimum 4 characters long',
            },
          }}
          secureTextEntry
        />
        <CustomButton
          text={load ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
        />

        <CustomButton
          text="Forgot Password"
          onPress={onForgotPwdPressed}
          type="TERTIARY"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#e3e3e3"
          fgColor="#4765a9"
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#fff',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;
