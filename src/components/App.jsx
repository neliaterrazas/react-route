import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Models from './Models';
import Home from './Home';
function App(){
  // const test = {
  //   color: 'red'
  // }
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Models' component={Models} />
      </Switch>
    </div>
  );

}

export default App;
