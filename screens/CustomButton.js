import { Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3871f3',
  },

  container_SECONDARY: {
    borderColor: '#3871f3',
    borderWidth: 2
  },

  container_TERTIARY: {
    backgroundColor: '#fff',
  },

  text: {
    fontWeight: 'bold',
  },

  text_SECONDARY: {
    color: '#3871f3'
  },

  text_TERTIARY: {
    color: '#000',
  },
});

export default CustomButton;
