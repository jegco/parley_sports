import React from "react";
import { Scene, Router, Stack, Tabs } from "react-native-router-flux";
import LoginComponent from "./../components/Login";
import MainComponent from "./../components/Main";
import BasketballComponent from "./../components/Basketball";
import BetsComponent from "../components/Bet";
import FootballComponent from "../components/Football";
import AccountComponent from "../components/Account";

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="Login"
            component={LoginComponent}
            title="Login"
            initial
            hideTabBar={true}
          />
          <Tabs key="MainRoot" tabBarPosition="bottom">
            <Scene key="Main" component={MainComponent} title="Main" />
            <Scene
              key="Basketball"
              component={BasketballComponent}
              title="Basketball"
            />
            <Scene key="Bets" component={BetsComponent} title="Bets" />
            <Scene
              key="Football"
              component={FootballComponent}
              title="Football"
            />
            <Scene key="Account" component={AccountComponent} title="Account" />
          </Tabs>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
