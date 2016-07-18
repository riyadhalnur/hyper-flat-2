'use strict';

const backgroundColor = '#273c4f';
const textColor = '#17cf70';
const cursorColor = '#edca00';

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: backgroundColor,
    foregroundColor: textColor,
    cursorColor: cursorColor,
    css: `
      ${config.css || ''}
    `
  });
};
