import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "./../store/actions";
import SummaryComponent from "./Summary";

class FootballComponent extends Component {
  games = [];

  constructor(props) {
    super(props);
    this.state = { games: this.props.games };
  }

  componentDidMount() {
    this.props.fetchGames();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      games: nextProps.games
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.games}
          renderItem={( {index, item} ) =>(
            <SummaryComponent style={styles.item}
              scoreLocal={item.scoreLocal}
              local={item.local}
              visitant={item.visitant}
              scoreVisit={item.scoreVisit}
              key={item.id}
            />)
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { games: state.games };
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default connect(
  mapStateToProps,
  { fetchGames: actions.fetchGames }
)(FootballComponent);
