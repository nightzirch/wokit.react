import React, { Component } from 'react';
import snow from '../assets/snow.gif';

import {
  Header
} from '../components';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}   
        <div className="page-background" style={{ backgroundImage: `url(${snow})` }} />   
      </div>
    );
  }
}

export default App;
