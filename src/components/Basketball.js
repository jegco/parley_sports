import React, { Component } from "react";
import { TextField } from "react-native-material-textfield";
import { View } from 'react-native';
import { ListView } from './lib/index';

class BasketballComponent extends Component {

  constructor(){
    
  }

  render() {
    return (
      <View>
        <ListView />
      </View>
    );
  }
}

export default BasketballComponent;