import React, { Component } from 'react';
import api from './services/api';

import './styles.css'

import Header from './compoments/header/index';
import Main from './Pages/Main/index';

const App = () => (
  <div classNmae="App">

    <Header />
    <Main />

  </div>

);

export default App;