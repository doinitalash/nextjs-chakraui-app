'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme' // Import theme from theme.ts

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default Providers