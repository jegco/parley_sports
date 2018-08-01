/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import RouterComponent from "./src/routes/Router";
import { Encabezado } from './src/components/lib/Encabezado';
import { BottomNavigation } from 'react-native-material-ui';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <RouterComponent />
        <BottomNavigation style={styles.BottomNavigation} /*active={this.state.active}*/ hidden={false}>
          <BottomNavigation.Action
            key="today"
            icon="today"
            label="Today"
            // onPress={() => this.setState({ active: "today" })}
          />
          <BottomNavigation.Action
            key="people"
            icon="people"
            label="People"
            // onPress={() => this.setState({ active: "people" })}
          />
          <BottomNavigation.Action
            key="bookmark-border"
            icon="bookmark-border"
            label="Bookmark"
            // onPress={() => this.setState({ active: "bookmark-border" })}
          />
          <BottomNavigation.Action
            key="settings"
            icon="settings"
            label="Settings"
            // onPress={() => this.setState({ active: "settings" })}
          />
        </BottomNavigation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  BottomNavigation: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
