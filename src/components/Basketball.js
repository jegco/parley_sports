import React, { Component } from "react";
import { TextField } from "react-native-material-textfield";
import { View, Button } from 'react-native';
import gamesService from "../api/games";

class BasketballComponent extends Component {

  // componentWillMount() {
  //   this.getBasketBallGames()
  // }

  // async getBasketBallGames() {
  //   const response = await gamesService.getGames()
  //   // console.log(response.data)
  // }

  render() {
    return (
      <View>
      <Button 
        styles={{width: 10, height: 50}}
        onPress={() =>  {Actions.Football()}}
        title="Footbal"/>
      </View>
    );
  }
}

export default BasketballComponent;