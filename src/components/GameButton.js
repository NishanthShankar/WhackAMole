import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

const gameButton = require('@Assets/gameBtn.png')

export default ({text}) => {
  return (
    <View style={styles.style_0}>
      <Image source={gameButton} style={styles.style_1} />
      <Text style={styles.style_2}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  style_0: {
    width: 138,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  style_1: {
    position: 'absolute',
    width: 138,
    height: 44
  },
  style_2: {
    color: '#5F3808',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
