import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './globaltheme';
import React, { useState } from 'react';
import {HiClipboardCopy} from 'react-icons/hi'

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
      <div className='flex flex-col text-center pt-4'>
        <h1>Settings</h1>
        <p className='pt-5'>Toggle theme <button className='bg-red-400 rounded py-1 px-2 text-white' onClick={toggleTheme}>Click</button></p>
        <h2 className='pt-10 font-bold'>Contact Information</h2>
        <p className='pt-5'>Email: outdoorsy@gmail.com <button className='bg-red-400 rounded py-2 px-2 text-white' onClick={() => navigator. clipboard. writeText('outdoorsy@gmail.com')}><HiClipboardCopy /></button></p>
      </div>
    </ThemeProvider>
  );
}
export default Settings;