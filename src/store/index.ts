import { createStore, applyMiddleware, compose } from 'redux'

import { AsyncStorage } from 'react-native'

import { persistStore, persistCombineReducers } from 'redux-persist'

import * as reducers from '../reducers'

const combinedReducers = persistCombineReducers(
  {
    key: 'parcmg',
    storage: AsyncStorage,
  },
  reducers,
)

const middlewares = []

export const store = applyMiddleware(...middlewares)(createStore)(combinedReducers)
export const persistor = persistStore(store)
