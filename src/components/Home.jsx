import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import tesla from '../assets/images/tesla.jpg';
import Header from './Header';

function Home(){
  const img = {
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: '0'
  }
  return(
  <div>
    <img style={img} src={tesla}/>
  </div>
  );
}

export default Home;
