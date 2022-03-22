import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './globaltheme';
import React, { useState } from 'react';

function Settings() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } 
    else {
      setTheme('dark');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>    
      <GlobalStyles />
      <div className='flex flex-col text-center'>
        <h1>Settings</h1>
        <p className='pt-4'>Toggle theme <button className='bg-blue-600 rounded py-1 px-2 text-white' onClick={toggleTheme}>Click</button></p>
      </div>
    </ThemeProvider>
  );
}
export default Settings;