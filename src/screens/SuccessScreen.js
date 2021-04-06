import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants';

const SuccessScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have successfully created an account!</Text>
    </View>
  )
}

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 64,
    backgroundColor: Colors.black,
  },
  text: {
    fontSize: 32,
    color: Colors.white,
  }
})
