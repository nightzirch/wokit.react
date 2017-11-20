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

      <p className='made-by'>Laget av Regine Raknes</p>
    </div>
  );
}

export default Regine;