import d from './data.json';

export default {
  getRecipeName: () => {
    let alternatives = [
      `${r(d.adjective)} ${r(d.noun)}`,
      `${r(d.adjective)} ${r(d.noun)} på ${r(d.noun)}`,
      `${r(d.noun)} på ${r(d.adjective)} ${r(d.noun)}`,
      `${r(d.noun)} i ${r(d.noun)}`
    ];

    return capitalizeString(r(alternatives));
  },

  getIngredient: (from = 0, to = 5, wholeNum = false) => {
    return capitalizeString(`${rn(from, to, wholeNum)} ${r(d.measurement)} ${r(d.noun)}`);
  },

  getBreadText: () => {
    let alternatives = [
      'Poop in the plant pot chew on cable cats go for world domination so lick arm hair open the door, let me out, let me out, let me-out, let me-aow, let meaow, meaow!',
      'Stick butt in face bleghbleghvomit my furball really tie the room together yet destroy couch as revenge sit by the fire hiss and stare at nothing then run.',
      'Scratch the box and sometimes switches in french and say "miaou" just because well why not.',
      'Chase after silly colored fish toys around the house vommit food and eat it again so lick the curtain just to be annoying so favor packaging over toy.',
      'Massacre a bird in the living room and then look like the cutest and most innocent animal on the planet howl.',
      'Your pillow is now my pet bed flop over gnaw the corn cob or show belly.'
    ];

    return r(alternatives);
  }
}

// Get random from array
let r = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

// Get random number
let rn = (from, to, wholeNum) => {
  if(wholeNum) {
    return Math.floor(Math.random() * to) + from;
  } else {
    return ((Math.random() * to) + from).toFixed(1);
  }
}

let capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}