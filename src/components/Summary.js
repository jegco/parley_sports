import React, { Component } from "react";
import { View, Text } from 'react-native';

class SummaryComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {local: this.props.local, scoreLocal: this.props.scoreLocal, visitant: this.props.visitant, scoreVisitan: this.props.visitant}
    }

  render() {
    return (
      <View>
        <Text label="username" >{this.state.local} </Text>
        <Text label="username" >{this.state.scoreLocal} </Text>
        <Text label="username" >{this.state.scoreVisitan} </Text>
        <Text label="username" >{this.state.visitant} </Text>
        <Text />
      </View>
    );
  }
}

export default SummaryComponent;