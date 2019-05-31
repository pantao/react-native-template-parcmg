import { applyMiddleware, createStore } from 'redux'

import AsyncStorage from '@react-native-community/async-storage'

import { createLogger } from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'

import rootReducer from '../reducers'

const combinedReducers = persistReducer(
  {
    key: 'parcmg',
    storage: AsyncStorage,
    debug: true,
  },
  rootReducer,
)

const middlewares = []

if (__DEV__) {
  middlewares.push(createLogger({ timestamp: true }))
}

export const store = applyMiddleware(...middlewares)(createStore)(combinedReducers)
export const persistor = persistStore(store)
