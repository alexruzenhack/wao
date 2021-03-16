import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import {defaultTheme, Flex, Provider} from '@adobe/react-spectrum';
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import { QuestionsBoard } from "./Question/QuestionsBoard";


class App extends Component {
  render() {
    return (
      <Provider theme={defaultTheme} colorScheme="light">
        <div className="App">
          <Flex 
            direction="column"
            gap="size-100"
            alignContent="center"
            >
            <Switch>
              <Route exect path="/" component={QuestionsBoard} />
            </Switch>
          </Flex>
        </div>
      </Provider>
    );
  }
}

export default hot(App);
