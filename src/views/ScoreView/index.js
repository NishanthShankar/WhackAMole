import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native'

// Redux
import { connect } from 'react-redux'
import GameButton from '@Components/GameButton'
import GameActions from '@Redux/GameRedux'

const screen = require('@Assets/screen.png')

class ScoreView extends Component {
  componentDidMount () {
    setInterval(this.props.countdown, 1000)
  }

  render () {
    const width = Dimensions.get('screen').width
    const height = width / 2.08
    return <View style={[styles.container, {height}]}>
      <Image source={screen} style={[styles.bgImage, {height, width}]} />
      <View style={styles.infoContainer}>
        <GameButton text={this.props.score} />
        <GameButton text={this.props.time} />
      </View>
    </View>
  }
}

const mapStateToProps = state => ({
  score: state.game.score,
  time: state.game.displayTime
})

const mapDispatchToProps = dispatch => ({
  countdown: _ => dispatch(GameActions.gameCountdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreView)

const styles = StyleSheet.create({
  container: {
  },
  bgImage: {
    position: 'absolute'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 26,
    marginHorizontal: 8
  }
})
