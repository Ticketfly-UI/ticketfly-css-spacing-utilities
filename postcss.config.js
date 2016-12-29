/* global module */
module.exports = {
  input: 'index.css',
  output: 'build/ticketfly-css-spacing-utilities.css',

  use: [
    'postcss-import',
    'postcss-cssnext'
  ]
};
