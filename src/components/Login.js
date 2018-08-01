import React, { Component } from "react";
import { Button } from "react-native-material-ui";
import { TextField } from "react-native-material-textfield";
import { View } from 'react-native';
import { Actions } from "../../node_modules/react-native-router-flux";

class LoginComponent extends Component {

    state = {
        username: '',
        password: ''
      };

  render() {
      let { username, password } = this.state
    return (
      <View>
        <TextField label="username" value={username} onChangeText={ (username) => {console.log('hola', username); this.setState({ username: username })} } />
        <TextField label="password" value={password} onChangeText={ (password) => this.setState({ password: password }) } />
        <Button raised accent text="Log in" 
        onPress={() =>  {console.log('asdasd'); Actions.Main()}}/>
      </View>
    );
  }
}

export default LoginComponent;
