import React, { Component } from 'react';
import Generator from '../data/generator';

import {
  Container
} from '../components';

class FrontPage extends Component {
  render() {
    return (
      <div className="page-container front-page">
        <Container>
          <h1>{Generator.getRecipeName()}</h1>
          <p>{Generator.getIngredient()}</p>
          <p>{Generator.getBreadText()}</p>
        </Container>
      </div>
    );
  }
}

export default FrontPage;
