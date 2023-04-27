import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './pages/Home';
import Profile from './pages/Profile'
import SharedDeals from './pages/SharedDeals'
import Header from './components/Header';
import authService from './utils/auth'
import AddDealForm from './pages/AddDeal';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Header authService={authService}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/me' element={<Profile />} />
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shareddeal' element={<SharedDeals />} />
          <Route path='/add-deal' element={<AddDealForm />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
export default App;