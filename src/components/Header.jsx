import React, { useState } from 'react';

const Header = () => {
  // state hooks
  const [darkMode, setDarkMode] = useState(false);

  // handlers
  const handleClick = () => {
    setDarkMode(!darkMode);
  }
  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      <button type="button" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light Mode2' : 'Dark Mode2'}</button>

    </div>
  );
}

export default Header;