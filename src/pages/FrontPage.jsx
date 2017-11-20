import React, { Component } from 'react';
import $ from 'jquery';
import snow from '../assets/snow.gif';

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
  componentDidMount() {
    $(document).ready(() => {
      this.scrollToBottom();
    })
  }

  scrollToBottom() {
    let windowHeight = window.innerHeight,
        bodyHeight = document.querySelector('body').offsetHeight,
        animationTime = 20000;

    window.scrollTo(0, 0);

    if(bodyHeight > windowHeight) {
      $('html, body').animate({
        scrollTop: bodyHeight - windowHeight
      }, animationTime);
    }
  }

  render() {
    return (
      <div className="page-container front-page">
        
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
        <div className="page-background" style={{ backgroundImage: `url(${snow})` }} />
      </div>
    );
  }
}

export default FrontPage;
