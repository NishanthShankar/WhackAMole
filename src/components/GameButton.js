import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

const gameButton = require('@Assets/gameBtn.png')

export default ({text}) => {
  return (
    <View style={{width: 138, height: 44, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={gameButton} style={{position: 'absolute', width: 138, height: 44}} />
      <Text style={{color: '#5F3808', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{text}</Text>
    </View>
  )
}
