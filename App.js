import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import RouterComponent from "./src/routes/Router";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./src/store/reducers";
import createSagaMiddleware from 'redux-saga';
import gameSagas from './src/store/sagas/games';
import firebase from 'firebase';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCAYfp33xpW5xXAxiD8ji_zjIaT26ZYLpY",
    authDomain: "maps-1510612754588.firebaseapp.com",
    databaseURL: "https://maps-1510612754588.firebaseio.com",
    projectId: "maps-1510612754588",
    storageBucket: "maps-1510612754588.appspot.com",
    messagingSenderId: "795408322738"
    });
  }

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
