import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Signup from './pages/Signup';
import Login from './pages/Login'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login'  element={<Login/>}/>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;