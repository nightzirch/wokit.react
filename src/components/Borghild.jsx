import React from 'react';
import bobler from '../assets/bobler.jpg';

const Borghild = () => {
  return (
    <div className="borghild-blokk article-block">
      <h1>Borghilds Juletips!</h1>
      <a href="https://matprat.no">
        <img alt='' src={bobler} />
      </a>
      <p>
        <b>
          Boblende velkomst er alltid en vinner.</b>
        Stemningen blir frisk og praten gaar lett fra starten av. En dreven nyter av bobler, Sveaas, sier at boblende drikke kan aldri bli servert kald nok. TIPS: Sett derfor flasken i fryseren siste 30 min foer gjestene kommer. Glitrende God Jul og nyt skaalen!
</p>
    </div>
  );
}

export default Borghild;