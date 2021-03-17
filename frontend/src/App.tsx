import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import {defaultTheme, Flex, Provider} from '@adobe/react-spectrum';
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import { QuestionsBoard } from "./Question/QuestionsBoard";
import { Authentication } from "./Authentication/Authentication";
import { PrivateRoute } from "./Routing/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Provider theme={defaultTheme} colorScheme="light">
        <div className="App">
          <Switch>
            <Route exect path="/auth" component={Authentication} />
            <PrivateRoute exect path="/" component={QuestionsBoard} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default hot(App);
