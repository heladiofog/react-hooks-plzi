import { useState } from 'react';
// components
import Header from './components/Header';
import Characters from './components/Characters';
// Styles
import './App.css';
// For theming
// Contexts
import ThemeContext, { themes } from './context/ThemeContext';

function App() {
  // Theming state
  const [theme, setTheme] = useState(themes.light);
  // Handling theme change
  const toggleTheme = () => {
    setTheme(
      (prevTheme) => prevTheme === themes.light ? 
        themes.dark :
        themes.light
      );
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
    <div
      className="App"
      style={{ color: theme.foreground, backgroundColor: theme.background }}
    >
      <Header />
      <Characters />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
