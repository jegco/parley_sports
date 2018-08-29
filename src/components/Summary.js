import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

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
      <TouchableOpacity onPress={this.clicked.bind(this)} style={styles.itemContainer}>
        <Text label="local" style={styles.item}>{this.state.local} </Text>
        <Text label="score_local" style={styles.item}>{this.state.scoreLocal} </Text>
        <Text label="score_visitant" style={styles.item}>{this.state.scoreVisitan} </Text>
        <Text label="visitant" style={styles.item}>{this.state.visitant} </Text>
      </TouchableOpacity>
    );
  }

  clicked() {
    console.log("entro");
  }
}

const styles = StyleSheet.create({
   itemContainer: {
    flex: 1, 
    flexDirection: 'row',
    height: 20,
   },
   item: {
     width: 100
   }
});

export default SummaryComponent;
