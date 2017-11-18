import React from 'react';
import mage from '../assets/mage.gif';

const Sverre = () => {
  return (
    <div className="sverre-blokk article-block">
      <h1>Juleribbe</h1>
      <a href="https://www.matprat.no/oppskrifter/tradisjon/ribbe/">
        <img src={mage} />
      </a>
      <p>Det er ikke mange norske hjem uten ribbe i løpet av jula,
        og det store samtaleemnet er om svoren blir like sprø i år
        som i fjor. Under finner du noen lure knep for å få den
        beste ribba.</p>
    </div>
  );
}

export default Sverre;