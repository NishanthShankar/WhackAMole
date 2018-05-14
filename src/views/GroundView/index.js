import React, { Component } from 'react'
import {
  View
} from 'react-native'

// Redux
import { connect } from 'react-redux'
import GameActions from '@Redux/GameRedux'

import HoleMole from '@Components/HoleMole'

class GroundView extends Component {
  render () {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <HoleMole {...this.props} />
          <HoleMole {...this.props} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <HoleMole {...this.props} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <HoleMole {...this.props} />
          <HoleMole {...this.props} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <HoleMole {...this.props} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <HoleMole {...this.props} />
          <HoleMole {...this.props} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  time: state.game.time,
  currentVisible: state.game.currentVisible,
  ...state.game.difficulty
})

const mapDispatchToProps = dispatch => ({
  onHit: _ => dispatch(GameActions.gameHit()),
  onMiss: _ => dispatch(GameActions.gameMiss()),
  onShow: _ => dispatch(GameActions.gameUpdateVisible(1)),
  onHide: _ => dispatch(GameActions.gameUpdateVisible(-1))
})

export default connect(mapStateToProps, mapDispatchToProps)(GroundView)
