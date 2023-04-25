import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    background-color: #222;
  }
`
export default GlobalStyle
