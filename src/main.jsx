import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//chakra ui
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme.js'
//react router dom
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
