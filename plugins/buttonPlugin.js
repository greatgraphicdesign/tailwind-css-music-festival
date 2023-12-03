const plugin = require("tailwindcss/plugin");
const { default: lightOrDarkColor } = require("@check-light-or-dark/color");

const buttonPlugin = plugin(function({addComponents, matchComponents, theme}){
  console.log('\nthe theme object spacing...\n', theme('spacing'));
  console.log('\nthe theme object borderRadius...\n', theme('borderRadius'));
  addComponents({
    '.btn': {
      display: 'inline-block',
      cursor: 'pointer',
      fontWeight: 'bold',
      /* showing two syntaxes to reference string without special chars */
      padding: `${theme('spacing.2')} ${theme('spacing')['4']}`,
      /* possible syntax when the key is not a string */
      borderRadius: theme('borderRadius').lg,
    },
  });

  console.log('\nthe theme object colors...\n', theme('colors'));
  for (let key in theme('colors')) {
    if (typeof theme('colors')[key] !== 'string') {
      for (let shade in theme('colors')[key]) {
        const colorType = lightOrDarkColor(theme('colors')[key][shade]);
        addComponents({
          [`.btn-${key}-${shade}`]: {
            backgroundColor: theme('colors')[key][shade],
            color: colorType === 'dark' ? 'white' : 'black',
          },
        });
      }
    }
  }

  matchComponents({
    btn: (value) => {
      return {
        backgroundColor: value,
        color: lightOrDarkColor(value) === 'dark' ? 'white' : 'black',
      };
    },
  });
});

module.exports = buttonPlugin;
