import React, { Component } from 'react';
import snow from '../assets/snow.webp';

import {
  AnneLise,
  Birgitte,
  Borghild,
  Camilla,
  Ellen,
  Fredrik,
  JanGeorg1,
  JanGeorg2,
  Marie,
  Regine,
  Sigrid1,
  Sigrid2,
  Sigrid3,
  Sverre
} from '../components';

class FrontPage extends Component {
  render() {
    return (
      <div className="page-container front-page">
        <div className="page-background" style={{ backgroundImage: `url(${snow})` }} />
        
        <AnneLise />
        <Birgitte />
        <Borghild />
        <Camilla />
        <Ellen />
        <Fredrik />
        <JanGeorg1 />
        <JanGeorg2 />
        <Marie />
        <Regine />
        <Sigrid1 />
        <Sigrid2 />
        <Sigrid3 />
        <Sverre />
      </div>
    );
  }
}

export default FrontPage;
