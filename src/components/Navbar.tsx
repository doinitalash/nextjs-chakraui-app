'use client'

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  VStack,
  useDisclosure,
  Link as ChakraLink,
  Text,
  Slide,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { FaInstagram, FaTiktok, FaTelegram } from 'react-icons/fa'
import { useEffect } from 'react'
import NextLink from 'next/link'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  // Dynamically set viewport height for mobile to handle browser bar
  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    handleResize() // Set on load
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Navigation links
  const links = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Products', href: '/#products' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <Box as="header" position="sticky" top={0} zIndex={1000} bg="brand.accent" shadow="md" h="4rem">
      <Flex as="nav" maxW="7xl" mx="auto" h="100%" px={6} py={{base: 2, md: 4}} align="center" justify="space-between">
        {/* Logo */}
        <NextLink href="/" passHref>
          <ChakraLink
            fontWeight="bold"
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} // Responsive text size
            color="brand.primary"
            _hover={{ textDecoration: 'none', color: 'brand.primaryHover' }}
            display="inline-block"
          >
            Doinitalash
          </ChakraLink>
        </NextLink>

        {/* Desktop Links */}
        <HStack as="nav" spacing={6} display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => (
            <NextLink key={link.name} href={link.href} passHref>
              <ChakraLink
                fontWeight="medium"
                fontSize="sm" // Reduced size for a cleaner look
                color="brand.grayLight"
                _hover={{
                  color: 'brand.primary',
                  textDecoration: 'underline',
                  textDecorationThickness: '2px',
                  textUnderlineOffset: '4px',
                  transition: 'color 0.3s ease, text-decoration 0.3s ease',
                }}
              >
                {link.name}
              </ChakraLink>
            </NextLink>
          ))}
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
          color="brand.primary"
          size="lg"
        />
      </Flex>

      {/* Mobile Fullscreen Menu */}
      <Slide direction="top" in={isOpen} style={{ zIndex: 20 }}>
        <Box
          bg="brand.accent"
          w="100vw"
          h="100vh" // Ensures full-screen height on mobile
          display="flex"
          flexDirection="column"
          justifyContent="center" // Vertically centers all content
          alignItems="center" // Horizontally centers all content
          px={4}
          py={0}
          position="relative"
        >
          {/* Close Button */}
          <IconButton
            position="absolute"
            top={4}
            right={4}
            onClick={onToggle}
            icon={<CloseIcon />}
            variant="ghost"
            aria-label="Close Menu"
            size="lg"
            color="brand.primary"
          />

          {/* Mobile Navigation Links */}
          <VStack spacing={8} align="center"> {/* Adjust spacing for consistent layout */}
            {links.map((link) => (
              <NextLink key={link.name} href={link.href} passHref>
                <ChakraLink
                  fontWeight="medium"
                  fontSize="xl" // Large size for mobile readability
                  color="brand.light"
                  _hover={{
                    color: 'brand.primaryHover',
                    textDecoration: 'underline',
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '4px',
                    transition: 'color 0.3s ease, text-decoration 0.3s ease',
                  }}
                  onClick={onToggle}
                >
                  {link.name}
                </ChakraLink>
              </NextLink>
            ))}
          </VStack>

          {/* Social Media Section */}
          <Box textAlign="center" mt={12}>
            <Text fontSize="lg" fontWeight="bold" color="brand.grayDark" mb={3}>
              Connect with Us
            </Text>
            <HStack justify="center" spacing={6}>
              <Link
                href="https://www.instagram.com"
                isExternal
                aria-label="Visit Instagram"
                color="brand.grayLight"
                _hover={{ color: 'brand.primary' }}
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.tiktok.com"
                isExternal
                aria-label="Visit TikTok"
                color="brand.grayLight"
                _hover={{ color: 'brand.primary' }}
              >
                <FaTiktok size={24} />
              </Link>
              <Link
                href="https://t.me"
                isExternal
                aria-label="Visit Telegram"
                color="brand.grayLight"
                _hover={{ color: 'brand.primary' }}
              >
                <FaTelegram size={24} />
              </Link>
            </HStack>
          </Box>
        </Box>
      </Slide>

    </Box>
  )
}
