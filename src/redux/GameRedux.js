import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import config from '../config/gameConfig'

/* ------------------ Helpers ------------- */

const convertSecondsToTime = (seconds) => {
  const min = parseInt(seconds / 60)
  seconds = `0${seconds % 60}`.slice(-2)
  return `${min}:${seconds}`
}

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  gameHit: [],
  gameMiss: [],
  gameCountdown: [],
  gameUpdateVisible: ['offset']
})

export const GameType = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  hits: 0,
  currentVisible: 0,
  time: config.totalTime,
  displayTime: convertSecondsToTime(config.totalTime),
  score: 0,
  difficulty: config.difficulty.easy
})

/* ------------- Reducers ------------- */

export const hit = (state) =>
  state.merge({score: state.score + config.pointsPerHit})

export const miss = (state) =>
  state.merge({score: state.score + config.pointsPerMiss})

export const updateVisible = (state, {offset}) =>
  state.merge({currentVisible: Math.max(state.currentVisible + offset, 0)})

export const countdown = (state) => {
  const time = Math.max(state.time - 1, 0)
  let difficulty = 'medium'
  if (time > 0.75 * config.totalTime) difficulty = 'easy'
  if (time < 0.25 * config.totalTime) difficulty = 'hard'
  return state.merge({
    time,
    displayTime: convertSecondsToTime(time),
    difficulty: config.difficulty[difficulty]
  })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GAME_HIT]: hit,
  [Types.GAME_MISS]: miss,
  [Types.GAME_COUNTDOWN]: countdown,
  [Types.GAME_UPDATE_VISIBLE]: updateVisible
})
