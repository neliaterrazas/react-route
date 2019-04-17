import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import tesla from '../assets/images/tesla.jpeg';

function Home(){
  // const test = {
  //   color: 'red'
  // }
  return(
    <div>
      <h1>Test Home</h1>
      <a><Link to="/Models">Models</Link></a>
      <br/>
      <img src={tesla}/>
    </div>
  );

}

export default Home;
