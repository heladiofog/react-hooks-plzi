import React from 'react';
// Available themes
export const themes = {
  light: {
    // foreground: '#000000',
    // background: '#eeeeee',
    foreground: '#282c34',
    background: '#eeeeee',
  },
  dark: {
    // foreground: '#ffffff',
    // background: '#222222',
    foreground: '#1fb0ca',
    background: '#282c34',
  },
};
// Theme init value
const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
