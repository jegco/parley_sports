import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

class SummaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      local: this.props.local,
      scoreLocal: this.props.scoreLocal,
      visitant: this.props.visitant,
      scoreVisitan: this.props.scoreVisit
    };
  }

  render() {
    return (
      <TouchableOpacity onPress={this.clicked.bind(this)}>
        <Text label="local">{this.state.local} </Text>
        <Text label="score_local">{this.state.scoreLocal} </Text>
        <Text label="score_visitant">{this.state.scoreVisitan} </Text>
        <Text label="visitant">{this.state.visitant} </Text>
      </TouchableOpacity>
    );
  }

  clicked() {
    console.log("entro");
  }
}

export default SummaryComponent;
