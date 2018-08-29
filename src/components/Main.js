import React, { Component } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Actions } from "../../node_modules/react-native-router-flux";

class MainComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.containerRow}>
        <TouchableOpacity onPress={this.gotToFootbal.bind(this)}>
          <Image
            style={styles.images}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/0/07/%D0%A4%D0%9A_%22%D0%9A%D0%BE%D0%BB%D0%BE%D1%81%22_%28%D0%97%D0%B0%D1%87%D0%B5%D0%BF%D0%B8%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0%2C_%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%29_-_%D0%A4%D0%9A_%22%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D0%BD%D1%8B%22_%28%D0%97%D0%B0%D1%80%D1%8F%2C_%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%29_%2818790931100%29.jpg"
            }}
          />
          <Text>Footbal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotToBasketball.bind(this)}>
          <Image
            style={styles.images}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
            }}
          />
          <Text>basketball</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.containerRow}>
        <TouchableOpacity onPress={this.gotToAccount.bind(this)}>
          <Image
            style={styles.images}
            source={{
              uri:
                "https://www.freeiconspng.com/uploads/account-icon-0.png"
            }}
          />
          <Text>account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotToBets.bind(this)}>
          <Image
            style={styles.images}
            source={{
              uri:
                "https://www.futaa.com/images/full/betting_3.jpg"
            }}
          />
          <Text>bets</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  gotToFootbal() {
    Actions.Football();
  }

  gotToBasketball() {
    Actions.Basketball();
  }

  gotToBets() {
    Actions.Bets();
  }

  gotToAccount() {
    Actions.Account();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  containerRow: {
    flex: 2,
    flexDirection: 'row',
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  images: {
    width: 100,
    height: 100
  }
});

export default MainComponent;
