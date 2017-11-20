import React from 'react';
import julesushi from '../assets/julesushi.jpeg';

const AnneLise = () => {
  return (
    <div className="annelise-blokk article-block">
      <h1>Anne Lise sin digge julesushi!</h1>
      <a href="https://matprat.no">
        <img alt='' src={julesushi} />
      </a>
      <p>
        Lær å lage de lekreste nissenigiri til familiens julebentobox!
            </p>
    </div>
  );
}

export default AnneLise;