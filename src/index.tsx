// import Roboto fonts
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
// import koulen fonts
import '@fontsource/koulen/'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'

import App from './App'

const theme = createTheme({
    palette: {
        background: {
            paper: '#ccd4d2',
        },
    },
})

// Global style we'd like to apply
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0; 
    font-family: Koulen, Roboto, Open-Sans, Helvetica, Sans-Serif;
    background-color: ${theme.palette.grey.A200}
  }
`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
