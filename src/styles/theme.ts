import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#F687B3', // Your existing pink shade
      primaryHover: '#ED64A6', //Hover accent
      secondary: '#242A36', // Dark blue-gray background
      accent: '#111827', // Even darker accent color
      light: '#FFFFFF', // White text or highlights
      grayLight: '#D1D5DB', // Matches gray.300
      grayDark: '#9CA3AF', // Matches gray.400
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.secondary', // Default body background
        color: 'brand.grayLight', // Default text color
        margin: 0,
        padding: 0,
      },
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
})

export default theme
