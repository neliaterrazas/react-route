import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import ModelS from './ModelS';
import Model3 from './Model3';
import ModelX from './ModelX';
import ModelY from './ModelY';
import Roadster from './Roadster';
import Energy from './Energy';
import Home from './Home';
import Header from './Header';
import Error404 from './Error404';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/ModelS' component={ModelS} />
        <Route path='/Model3' component={Model3} />
        <Route path='/ModelX' component={ModelX} />
        <Route path='/ModelY' component={ModelY} />
        <Route path='/Roadster' component={Roadster} />
        <Route path='/Energy' component={Energy} />
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default App;
