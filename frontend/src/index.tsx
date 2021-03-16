import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import { Provider, Client, dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import { ALL_QUESTIONS } from "./Question/QuestionList";

const cache = cacheExchange({
  updates: {
    Mutation: {
      questioning: (question, _args, cache) => {
        cache.updateQuery({ query: ALL_QUESTIONS }, data => {
          if (data !== null) {
            data.allQuestions.unshift(question)
            return data
          } else {
            return null
          }
        })
      }
    }
  }
})

const client = new Client({
  url: 'http://localhost:8080/graphql',
  exchanges: [dedupExchange, cache, fetchExchange],
})

ReactDOM.render(
    <Provider value={client}>
        <App />
    </Provider>
, document.getElementById("root"));
