import { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  // state hooks for button state
  const [darkMode, setDarkMode] = useState(false);  // initial state is false
  // Context vars for being used here
  const { toggleTheme } = useContext(ThemeContext);
  // handlers
  const handleClick = () => {
    setDarkMode(!darkMode);
    toggleTheme();
  }

  return (
    <div
      className="Header"
    >
      <h1>React Hooks from Platzi</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      {/* with anonymous function */}
      {/* <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light Mode2' : 'Dark Mode2'}</button> */}
    </div>
  );
}

export default Header;