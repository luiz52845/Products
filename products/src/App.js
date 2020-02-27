import React, { Component } from 'react';
import Routes from './routes';



import './styles.css'

import Header from './compoments/header/index';
import Menu from './compoments/menu';
import Main from './Pages/Main/index';



const App = () => (
  <div className="App">

    <Header />
    <Routes />

  </div>

);

export default App;