import React from 'react';
import fredrikGiphy from '../assets/fredrik_giphy.gif';

const Fredrik = () => {
  return (
    <div className="Fredrikblokk article-block">
      <h1>Fredrik er awsome</h1>
      
      <a href="https://matprat.no">
        <img src={fredrikGiphy} />
      </a>
        
      <p>Awsome Jul med Fredriks magiske Juletapaz! Trenger du ekstra julekos? Her får du juletipz, julatapaz, julegavetipz og mye mye mer #winning</p>
    </div>
  );
}

export default Fredrik;