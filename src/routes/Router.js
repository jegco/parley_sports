import React from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import LoginComponent from "./../components/Login";
import MainComponent from "./../components/Main";
import BasketballComponent from "./../components/Basketball";

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="Login" component={LoginComponent} title="Login" hideTabBar={true}/>
        <Scene key="Main" component={MainComponent} title="Main" >
          {/* <Scene
            key="Basketball"
            component={BasketballComponent}
            title="Basket"
          /> */}
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
