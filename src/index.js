import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:4000' // ,
  // clientState: {
  //   defaults,
  //   resolvers
  // }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
