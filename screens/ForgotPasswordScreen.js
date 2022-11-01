import {View, StyleSheet, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign in pressed');
  };
  const onSendPressed = () => {
    console.warn('On send pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Send" onPress={onSendPressed} />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'grey',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});

export default ForgotPasswordScreen;
