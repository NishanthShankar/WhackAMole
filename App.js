
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import MainView from '@Views/MainView'
import store from '@Redux/'

// import BG from './src/assets/screen.png'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    )
  }
}
