import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import WebFont from 'webfontloader'
import { ThemeProvider } from 'styled-components'
import Theme from '@/assets/styles/Theme.js'
import GlobalStyle from '@/assets/styles/GlobalStyle.js'

WebFont.load({
  google: {
    families: ['Nunito'],
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
