import React from 'react';
import julekaker from '../assets/julekaker.jpg';

const Regine = () => {
  return (
    <div className="Regine-blokk article-block">

      <h1> Smakfulle julekaker</h1>
      <p> Nå er det tid for årets julebakst!</p>

      <a href="https://www.matprat.no/julemat/julekaker/">
        <img alt='' src={julekaker} />
      </a>
    </div>
  );
}

export default Regine;