import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config:{
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    body: `'Roboto', sans-serif`,
  },
})

export default theme