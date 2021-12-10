import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    font-size: 14px;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
    
    width: fit-content;
    
    transition: .3s;
    
    &:hover { color: deeppink; }
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('react-app')
);