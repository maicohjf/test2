import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './js/reducers';
import AppWithNavigationState from './js/navigators/AppNavigator';
import { middleware } from './js/utils/redux';

const store = createStore(
  AppReducer,
  applyMiddleware(middleware),
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

