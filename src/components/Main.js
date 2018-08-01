import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Actions } from "../../node_modules/react-native-router-flux";
import RouterComponent from "../routes/Router";


class MainComponent extends Component {
  render() {
    console.log("entro");
    return (
      <View>
      
        {/* <RouterComponent /> */}

        
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

export default MainComponent;
