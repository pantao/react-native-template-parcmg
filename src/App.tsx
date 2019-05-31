import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './store'
import Bootstrap from './Bootstrap'

export interface IProps {}

export default class App extends PureComponent<IProps> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Bootstrap />
        </PersistGate>
      </Provider>
    )
  }
}
