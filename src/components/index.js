let files = {};

require.context('./', true, /\.jsx$/).keys().forEach((filename) => {
  let displayName = filename.split('./')[1].split('.jsx')[0];
  files[`${displayName}`] = require(`${filename}`).default;
});

module.exports = files;

