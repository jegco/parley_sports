import React, { Component } from "react";
import { Button } from "react-native-material-ui";
import { View } from "react-native";
import firebase from 'firebase';
import { Actions } from "../../node_modules/react-native-router-flux";

class AccountComponent extends Component {

  render() {
    return (
      <View>
        <Button raised accent text="Log out" onPress={this.logOut.bind(this)} />
      </View>
    );
  }

  logOut() {
      firebase.auth().signOut().then(
          Actions.Login()
      ).catch(e => console.log(e));
  }
}
export default AccountComponent;
