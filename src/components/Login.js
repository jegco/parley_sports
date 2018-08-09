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

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCAYfp33xpW5xXAxiD8ji_zjIaT26ZYLpY",
    authDomain: "maps-1510612754588.firebaseapp.com",
    databaseURL: "https://maps-1510612754588.firebaseio.com",
    projectId: "maps-1510612754588",
    storageBucket: "maps-1510612754588.appspot.com",
    messagingSenderId: "795408322738"
    })
  }

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
    console.log("asdasd")
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
