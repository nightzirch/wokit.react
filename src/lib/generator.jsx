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
    return r(d.breadText);
  },

  getParagraph: () => {
    return r(d.paragraph);
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