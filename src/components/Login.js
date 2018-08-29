import React, { Component } from "react";
import { Button } from "react-native-material-ui";
import { TextField } from "react-native-material-textfield";
import { View } from 'react-native';
import { Actions } from "../../node_modules/react-native-router-flux";
import firebase from 'firebase';

class LoginComponent extends Component {

    state = {
        username: '',
        password: ''
      };

  render() {
      let { username, password } = this.state
    return (
      <View>
        <TextField label="username" value={username} onChangeText={ (username) => this.setState({ username: username }) } />
        <TextField label="password" value={password} onChangeText={ (password) => this.setState({ password: password }) } />
        <Button raised accent text="Log in" 
        onPress={this.logIn.bind(this)}/>
      </View>
    );
  }

  logIn() {
    const {username, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(this.LoginSuccefull)
    .catch(this.LoingFailed)

  }

  LoginSuccefull() {
    Actions.MainRoot();
  }

  LoingFailed() {
    
  }
}

export default LoginComponent;
