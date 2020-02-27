import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "./Pages/Main";
import product from "./Pages/product";
import pesquisar from "./Pages/pesquisar";
import historico from "./Pages/historico";
import comprar from "./Pages/comprar";
import Menu from './compoments/menu';



const Routes = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/products/:id" component={product}></Route>
      <Route path="/pesquisar" component={pesquisar}></Route>
      <Route path="/historico" component={historico}></Route>
      <Route path="/comprar" component={comprar}></Route>
    </Switch>
    <Menu></Menu>
  </BrowserRouter>
);

export default Routes;