import axios from 'axios';
import React from 'react';
import './App.css';
import Router from './Router';
import {AuthContextProvider} from './context/UserAuth'
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;
