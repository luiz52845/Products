import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "./Pages/Main";
import product from "./Pages/product";


const Routes = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/products/:id" component={product}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;