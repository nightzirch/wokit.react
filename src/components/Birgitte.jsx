import React from 'react';
import risnisse from '../assets/risnisse.jpg';

const Birgitte = () => {
  return (
    <div className="birgitte-blokk article-block">
      <h1>Jul for store og små</h1>
      <a href="http://www.imdb.com/title/tt1758810/">
        <img alt='' src={risnisse} />

        <p>
          Sånn lager du denne søte snømannen som du kan spise
    </p>

      </a>
    </div>
  );
}

export default Birgitte;