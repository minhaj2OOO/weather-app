/*------------ Toggle that allows user to switch visibility mode --------------------

*We have used the following resource to help us build this code:
*    Title: react-day-night-toggle-app
*    Author: Maks Akymenko
*    Date: 26 Aug 2019
*    Availability: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

*/

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    transition: all 0.25s linear;
  }
  `;