import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, } from '@apollo/client';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import SharedDeals from './pages/SharedDeals';

import Header from './components/Header';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/login" 
              element={<Login />}
            />
            <Route 
              path="/signup" 
              element={<Signup />}
            />
            <Route 
              path="/me" 
              element={<Profile />}
            />
            {/* <Route 
              path="/profiles/:username" 
              element={<Profile />}
            /> */}
            <Route 
              path="/deals" 
              element={<SharedDeals />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  </ApolloProvider>
);

}

export default App;
