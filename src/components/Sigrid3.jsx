import React from 'react';
import Fredrik from '../assets/Fredrik.jpg';

const Sigrid3 = () => {
  return (
    <div className="sigrid-blokk article-block">
      <h1>Fredrik mottar prisen for årets nettside for eldre og svaksynte</h1>
      <p>"Jeg trives med å kode, og synes det er kjekt at det jeg lager kan hjelpe andre",sier Fredrik i en kommentar</p>
      <img src={Fredrik} />
    </div>
  );
}

export default Sigrid3;