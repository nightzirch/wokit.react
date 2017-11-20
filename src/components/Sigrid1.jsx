import React from 'react';
import christian from '../assets/Christian.jpg';

const Sigrid1 = () => {
  return (
    <div className="sigrid-blokk article-block">
      <h1>Christian springer fort i Stoltzen</h1>
      <p>Knowits raskeste mann knuste til med ny pers i årets løp</p>
      <img alt='' src={christian} />

      <p className='made-by'>Laget av Sigrid Stana Fasmer</p>
    </div>
  );
}

export default Sigrid1;