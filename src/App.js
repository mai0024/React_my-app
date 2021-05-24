import React from 'react';
import Header from '../src/components/Header';
import Main from './components/Main';
import About from './components/About';
import Hobby from './components/Hobby';
import Future from './components/Future';


import './App.css';
import './components/Header.css';
import './components/Main.css';
import './components/Hobby.css';
import './components/Future.css';


const App = () => {
  return (
    <div className="App" id='root'>
      <Header />
      <Main />
      <About />
      <Hobby />
      <Future /> 
    </div>
  );
}

export default App;
