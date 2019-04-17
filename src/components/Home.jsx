import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

function Home(){
  // const test = {
  //   color: 'red'
  // }
  return(
    <div>
      <h1>Test Home</h1>
      <a><Link to="/Models">Models</Link></a>
    </div>
  );

}

export default Home;
