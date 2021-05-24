import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/index.scss";
import kojiLogo from './images/koji_1.png';

import Home from './pages/Home';
import ViewArticle from './pages/ViewArticle';
import NotFound from './pages/NotFound';

const App = () => { 
  return (
    <>
      <center>
        <img src={kojiLogo} id="koji-logo" alt="Koji logo" />
      </center>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewArticle/:id" exact component={ViewArticle} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
};

export default App;
