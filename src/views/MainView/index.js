import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import GroundView from '@Views/GroundView'
import ScoreView from '@Views/ScoreView'

class MainView extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScoreView />
        <GroundView />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  hits: state.game.hits
})

export default connect(mapStateToProps, null)(MainView)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9bf9c'
  }
})
