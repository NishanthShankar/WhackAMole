import React, { Component } from 'react'
import {
  View,
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

// import { connect } from 'react-redux'

const hole = require('@Assets/hole.png')
const holeMask = require('@Assets/holeMask.png')
const mole = require('@Assets/mole.png')

const MOLE_VISIBLE_OFFSET = -28
const MOLE_HIDDEN_OFFSET = 70
const WAIT_SECONDS = 5

export default class HoleMole extends Component {
  state = {
    top: new Animated.Value(MOLE_HIDDEN_OFFSET)
  }

  show = false

  componentDidMount () {
    this.start()
  }

  start = () => {
    if (this.props.time < WAIT_SECONDS) return

    setTimeout(
      this.showMole,
      Math.random() * WAIT_SECONDS * 1000 + this.props.duration
    )
  }

  showMole = () => {
    const { maxVisible, visibleTime, animationDuration: duration } = this.props

    // Check for maximum visible mole and call start again if exceeds
    if (this.props.currentVisible >= maxVisible) return this.start()

    this.show = true
    // Notify parent about visible mole
    this.props.onShow()

    // On animated end is not completely reliable. Use time out instead
    setTimeout(_ => setTimeout(this.hideMole(false), visibleTime), duration)
    Animated.timing(this.state.top, {
      toValue: MOLE_VISIBLE_OFFSET,
      duration
    }).start()
  }

  hideMole = hit => () => {
    if (!this.show) {
      // unclean close
      return Animated.timing(this.state.top, {
        toValue: MOLE_HIDDEN_OFFSET
      }).start(this.cleanup(false, hit))
    }

    if (hit) {
      this.show = false
      this.props.onHit()
    }

    Animated.timing(this.state.top, { toValue: MOLE_HIDDEN_OFFSET }).start(
      this.cleanup(true, hit)
    )
  }

  cleanup = (clean, hit) => () => {
    this.show = false
    clean && !hit && this.props.onMiss()
    clean && this.start()
    this.props.onHide()
  }

  render () {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.hideMole(true)}
        style={styles.container}
      >
        <Image source={hole} resizeMode='contain' style={styles.hole} />
        <Animated.Image
          source={mole}
          resizeMode='contain'
          style={styles.hideMole}
        />
        <Image source={holeMask} resizeMode='contain' style={styles.mask} />
        <View style={styles.additional_mask} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 100
  },
  hole: {
    position: 'absolute',
    left: 6,
    width: 140,
    height: 100
  },
  hideMole: {
    position: 'absolute',
    left: -4,
    top: this.state.top,
    width: 160,
    height: 200
  },
  mask: {
    position: 'absolute',
    top: 26,
    width: 152,
    height: 100
  },
  additional_mask: {
    position: 'absolute',
    top: 90,
    width: 144,
    height: 180,
    backgroundColor: '#c9bf9c'
  }
})
