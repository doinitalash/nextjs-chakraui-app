'use client'

import './globals.css'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Providers from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>Doinitalash</title>
      </head>
      <body>
        <Providers>
          <Navbar />
            <Box as="main" flex="1">
            {children}
            </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
