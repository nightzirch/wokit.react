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


const animationTime = 20000;
let windowHeight = 0,
    bodyHeight = 0;

class FrontPage extends Component {
  componentDidMount() {
    $(document).ready(() => {
      this.updateHeights();
      this.scrollForever();
    })
  }

  updateHeights() {
    windowHeight = window.innerHeight;
    bodyHeight = document.querySelector('body').offsetHeight;
  }

  scrollForever() {
    let scrollLoop = () => {
      this.scrollToBottom();

      setTimeout(() => {
        this.scrollToTop();
      }, animationTime);
    }

    scrollLoop();
    setInterval(scrollLoop, animationTime * 2)
  }

  scrollToBottom() {
    window.scrollTo(0, 0);
    this.updateHeights();

    if(bodyHeight > windowHeight) {
      $('html, body').animate({
        scrollTop: bodyHeight - windowHeight
      }, animationTime);
    }
  }

  scrollToTop() {
    window.scrollTo(0, bodyHeight - windowHeight);
    this.updateHeights();

    if (bodyHeight > windowHeight) {
      $('html, body').animate({
        scrollTop: 0
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
