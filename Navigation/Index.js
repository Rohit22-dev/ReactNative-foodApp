import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Navigation = () => {
  return (
    <View>
      <Text style={styles.text}>Navigation</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        color: 'black',
    }
  });

export default Navigation