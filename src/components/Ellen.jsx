import React from 'react';
import bounty from '../assets/bounty-stenger.jpg';
import snow from '../assets/snow2-optimized.gif';

const Ellen = () => {
  return (
    <div className="ellen-blokk article-block" style={{ backgroundImage: `url(${snow})` }}>
      <h1>Juledigg</h1>
      <h2>Hjemmelaget Bounty stenger</h2>

      <a href="http://www.passionforbaking.com/no/blog/2016/12/01/hjemmelaget-bounty-stenger/">
        <img src={bounty} />
        <p>Oppskrift på superdiggge Bounty stenger finner du her!</p>
      </a>
    </div>
  );
}

export default Ellen;