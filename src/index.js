import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import fetch from "cross-fetch";
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = createHttpLink({
  uri: "https://notlarmbackend.herokuapp.com/graphql",
  fetch,
});

// const wsLink = new WebSocketLink({
//   uri: `ws://notlarmbackend.herokuapp.com/graphql`,
//   options: {
//     reconnect: true
//   }
// });

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  credentials: "include",
  //wsLink
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
