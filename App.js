import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import RouterComponent from "./src/routes/Router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./src/store/reducers";
import createSagaMiddleware from 'redux-saga';
import gameSagas from './src/store/sagas/games';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {

  render() {

    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
      reducers,
      applyMiddleware(sagaMiddleware)
    )

    sagaMiddleware.run(gameSagas);

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
