import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Models from './Models';
import Home from './Home';
import Error404 from './Error404';

function App(){
  // const test = {
  //   color: 'red'
  // }
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Models' component={Models} />
        <Route component={Error404} />
      </Switch>
    </div>
  );

}

export default App;
