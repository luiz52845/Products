import React, { Component } from 'react';
import Routes from './routes';

import './styles.css'

import Header from './compoments/header/index';
import Main from './Pages/Main/index';

const App = () => (
  <div classNmae="App">

    <Header />
    <Routes />

  </div>

);

export default App;