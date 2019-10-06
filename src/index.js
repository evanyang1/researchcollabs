import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:1234',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById("root"));
