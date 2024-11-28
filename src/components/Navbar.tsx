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

  // Full paths for correct navigation
  const links = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Products', href: '/#products' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <Box as="header" position="sticky" top={0} zIndex={1000} bg="#111827" shadow="md">
      {/* Main Navbar */}
      <Flex as="nav" maxW="7xl" mx="auto" px={8} py={4} align="center" justify="space-between">
        {/* Clickable Logo */}
        <NextLink href="/" passHref>
          <ChakraLink
            fontWeight="bold"
            fontSize="lg"
            color="pink.300"
            _hover={{ textDecoration: 'none', color: 'pink.400' }}
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
                fontSize="lg"
                color="gray.300"
                _hover={{
                  color: 'pink.300',
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
          color="pink.300"
          size="lg"
        />
      </Flex>

      {/* Mobile Fullscreen Menu */}
      <Slide direction="top" in={isOpen} style={{ zIndex: 20 }}>
        <Box
          bg="gray.900"
          w="full"
          h="calc(var(--vh, 1vh) * 100)"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          px={8}
          py={6}
        >
          {/* Close Button */}
          <IconButton
            position="absolute"
            top={6}
            right={6}
            onClick={onToggle}
            icon={<CloseIcon />}
            variant="ghost"
            aria-label="Close Menu"
            size="lg"
            color="pink.300"
          />

          {/* Navigation Links */}
          <VStack spacing={6} align="center" flex={1} justify="center">
            {links.map((link) => (
              <NextLink key={link.name} href={link.href} passHref>
                <ChakraLink
                  fontWeight="medium"
                  fontSize="2xl"
                  color="gray.300"
                  _hover={{
                    color: 'pink.300',
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
          <Box textAlign="center" mb={8}>
            <Text fontSize="lg" fontWeight="bold" color="gray.400" mb={3}>
              Connect with Us
            </Text>
            <HStack justify="center" spacing={6}>
              <Link
                href="https://www.instagram.com"
                isExternal
                color="gray.300"
                _hover={{ color: 'pink.300' }}
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://www.tiktok.com"
                isExternal
                color="gray.300"
                _hover={{ color: 'pink.300' }}
              >
                <FaTiktok size={24} />
              </Link>
              <Link
                href="https://t.me"
                isExternal
                color="gray.300"
                _hover={{ color: 'pink.300' }}
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
