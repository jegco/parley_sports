import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { Card } from './lib/Card';
import { CardSection} from './lib/CardSection'
import { Actions } from "../../node_modules/react-native-router-flux";

class MainComponent extends Component {
  render() {
    return (
      <View>
        <Button 
        styles={{width: 10, height: 50}}
        onPress={() =>  {Actions.Football()}}
        title="Footbal"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  BottomNavigation: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default MainComponent;
