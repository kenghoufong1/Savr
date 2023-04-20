import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CreateDeal, Header, Login, Profile, SavedDeals, SharedDeals, Signup } from './components';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
      </Router>
    </ApolloProvider>
  );
}

export default App;
