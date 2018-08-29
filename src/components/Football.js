/*jshint esversion: 6 */

import React, { Component } from "react";
import { View, SectionList, StyleSheet, Text, Image } from "react-native";
import { connect } from "react-redux";
import * as actions from "./../store/actions";
import SummaryComponent from "./Summary";

class FootballComponent extends Component {
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
    });
  }

  render() {
    const sections = [];
    this.state.games.forEach(games => {
      if (games.type === "footbal") {
        sections.push({
          title: games.country,
          image: games.image,
          data: games.gamesPlayed
        });
      }
    });
    return (
      <View style={styles.container}>
        <SectionList
          sections={sections}
          renderItem={({ index, item }) => (
            <SummaryComponent
              style={styles.item}
              scoreLocal={item.scoreLocal}
              local={item.local}
              visitant={item.visitant}
              scoreVisit={item.scoreVisit}
              key={item.id}
            />
          )}
          renderSectionHeader={({ section }) => (
            <View>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <Image source={{ uri: section.image }} />
            </View>
          )}
          keyExtractor={(item, index) => index}
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
    justifyContent: "center",
    alignSelf: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default connect(
  mapStateToProps,
  { fetchGames: actions.fetchGames }
)(FootballComponent);
