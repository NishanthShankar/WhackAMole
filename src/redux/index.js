import { createStore, combineReducers } from 'redux'

export const reducers = combineReducers({
  game: require('./GameRedux').reducer
})

export default createStore(reducers)
