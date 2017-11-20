import React from 'react';
import bilde from '../assets/bilde.png';

const JanGeorg1 = () => {
  return (
    <div className="jangeorg-blokk article-block">
      <h1>NY teamleder i KXB</h1>

      <img alt='' src={bilde} />

      <p className='made-by'>Laget av Jan Georg Lehmann-Røed</p>
    </div>
  );
}

export default JanGeorg1;