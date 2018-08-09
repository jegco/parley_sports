import React, { Component } from "react";
import { Button } from "react-native-material-ui";
import { TextField } from "react-native-material-textfield";
import { View } from 'react-native';

class BetsComponent extends Component {
  render() {
    return (
      <View>
        <TextField label="username" />
      </View>
    );
  }
}

export default BetsComponent;