import React from 'react';
import juletapas from '../assets/Juletapas.png';

const Camilla = () => {
  return (
    <div className="camilla-blokk article-block">
      <h1>God jul, her er en herlig julerett med fisk</h1>
      For oppskrift, klikk på bildet
    <a href="https://matprat.no">
        <img alt='' src={juletapas} />
      </a>
    </div>
  );
}

export default Camilla;