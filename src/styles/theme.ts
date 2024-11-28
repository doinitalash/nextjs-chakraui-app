import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#ffe4f0',
      100: '#ffb3d0',
      200: '#ff80b0',
      300: '#ff4d90',
      400: '#ff1a70',
      500: '#FF007A',
      600: '#e6006e',
      700: '#b30053',
      800: '#80003a',
      900: '#4d0021',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
})

export default theme
