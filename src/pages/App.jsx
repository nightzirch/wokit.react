import React, { Component } from 'react';

import {
  Footer,
  Header
} from '../components';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        {this.props.children}
        <Footer />        
      </div>
    );
  }
}

export default App;
