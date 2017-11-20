import React from 'react';
import arrested from '../assets/arrested2.gif';

const Marie = () => {
  return (
    <div className="marie-blokk article-block">
      <h1>Romjulstoddy smaker deilig!</h1>
      <h2>Romjulstoddy er alles favoritt. Vi hjelper deg å lage snadderdrikke til både svigermor og andre familiemedlemmer.</h2>
      <img alt='' src={arrested} />

      <p className='made-by'>Laget av Marie Stoltz</p>
    </div>
  );
}

export default Marie;