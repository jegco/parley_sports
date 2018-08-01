import React, { Component } from "react";
import { Button } from "react-native-material-ui";
import { TextField } from "react-native-material-textfield";
import { View } from 'react-native';

class BasketballComponent extends Component {
  render() {
    return (
      <View>
        <TextField label="username" />
        <TextField label="password" />
        <Button raised accent text="Log in" />
      </View>
    );
  }
}

export default BasketballComponent;