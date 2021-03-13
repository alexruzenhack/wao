import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import { Provider, Client, dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'

const cache = cacheExchange({})

const client = new Client({
  url: 'http://localhost:8080/graphql',
  exchanges: [dedupExchange, cache, fetchExchange],
})

ReactDOM.render(
    <Provider value={client}>
        <App />
    </Provider>
, document.getElementById("root"));
