import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Cybersecurity from './components/Cybersecurity';
import Contactme from './components/Contactme';
import Footer from './components/Footer';
import { render } from 'react-dom/cjs/react-dom.development';
import { Backdrop } from '@material-ui/core';
import { Route } from 'react-router';
import {ReactComponent as Background } from './Images/background20210812-01.svg';







export default class App extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path='/' render={() => {
          return <Home data={this.data} /> }}/>

        
        <Route exact path='/projects' render={() => {
          return <Projects data={this.data} />
        }} />

        <Route exact path='/cybersecurity' render={() => {
          return <Cybersecurity data={this.data} />
        }} />

        <Route exact path='/contactme' render={() => {
          return <Contactme data={this.data} />
        }} />
        
      </div>
      
    )
  }
}



