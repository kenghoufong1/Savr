import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './pages/Home';
import Profile from './pages/Profile'
import Header from './components/Header';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
export default App;