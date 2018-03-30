import React from 'react';
import { AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { middleware } from './js/utils/redux';

import AppReducer from './js/reducers';
import AppWithNavigationState from './js/navigators/AppNavigator';
import rootSaga from './js/sagas';

const sagaMiddleware = createSagaMiddleware();

const rootMiddleware = [middleware, sagaMiddleware];

const store = createStore(
  AppReducer,
  applyMiddleware(...rootMiddleware),
);

sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

