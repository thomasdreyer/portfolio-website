import React, { Component } from 'react';

import './App.css';
import Typing from './components/Typing/Typing';
import Hero from './components/Hero/Hero'
import ContactMe from './components/ContactMe/ContactMe'
import Portfolio from './components/Portfolio/Portfolio'
class App extends Component {
  render() {
    return (
<div className='App'>
<Hero/>

<Portfolio/>

<ContactMe/>
</div>




    );
  }
}

export default App;
