import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import {defaultTheme, Flex, Provider} from '@adobe/react-spectrum';
import "./App.css";
import { QuestionList } from "./Question/QuestionList";
import { NewQuestion } from "./Question/NewQuestion";

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
            <h1>Wrong Answers Only</h1>
            <NewQuestion />
            <QuestionList />
          </Flex>
        </div>
      </Provider>
    );
  }
}

export default hot(App);
