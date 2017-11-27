import React, { Component } from 'react';
import $ from 'jquery';

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
let scrollElement = null,
    windowHeight = 0,
    bodyHeight = 0;

class FrontPage extends Component {
  componentDidMount() {
    if (window.location.hash.split("#").filter(a => a) == "tv") {
      $(document).ready(() => {
        this.updateHeights();
        this.scrollForever();
      })
    }
  }

  updateHeights() {
    scrollElement = document.querySelector('.page-container');
    windowHeight = scrollElement.clientHeight;
    bodyHeight = scrollElement.scrollHeight;
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
      $(scrollElement).animate({
        scrollTop: bodyHeight - windowHeight
      }, animationTime);
    }
  }

  scrollToTop() {
    window.scrollTo(0, bodyHeight - windowHeight);
    this.updateHeights();

    if (bodyHeight > windowHeight) {
      $(scrollElement).animate({
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
      </div>
    );
  }
}

export default FrontPage;
