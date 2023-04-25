import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './pages/Home';
import Profile from './pages/Profile'
import SharedDeals from './pages/SharedDeals'
import Header from './components/Header';
import authService from './utils/auth'

const client = new ApolloClient({
  uri: '/graphql',
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
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
export default App;