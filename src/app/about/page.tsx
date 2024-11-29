'use client'

import {
  Box,
  Heading,
  VStack,
  Text,
  chakra,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import NextLink from 'next/link'
import { useState, useEffect } from 'react'
import SexyButton from '../../components/SexyButton'

// Motion Box for animated transitions
const MotionBox = motion(Box)

export default function AboutPage() {
  const [imagePaths, setImagePaths] = useState<string[]>([]) // State to store image paths

  // Fetch image paths dynamically from the API
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/get-images')
      const data = await response.json()
      setImagePaths(data)
    }
    fetchImages()
  }, [])

  return (
    <Box as="section" bg="brand.secondary" color="white" minH="100vh" py={{ base: 12, md: 16 }} px={4}>
      {/* Hero Section */}
      <VStack spacing={6} textAlign="center" mb={{ base: 12, md: 16 }}>
        <Heading
          fontSize={{ base: '3xl', md: '5xl' }}
          color="brand.primary" // Using the primary brand color for headings
          fontFamily="'Playfair Display', serif"
          fontWeight="bold"
        >
          About Doinitalash
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          maxW="3xl"
          color="brand.grayLight"
          fontFamily="'Roboto', sans-serif"
        >
          Welcome to Doinitalash! We are passionate about enhancing natural beauty through the artistry of lash extensions and empowering aspiring lash artists with exceptional training experiences. Our journey is rooted in innovation, creativity, and a commitment to excellence.
        </Text>
      </VStack>

      {/* Masonry Layout for images */}
      <Box px={4} maxW="7xl" mx="auto">
        <chakra.div
          as={Masonry}
          breakpointCols={{
            default: 3,
            1100: 2,
            768: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-column"
        >
          {imagePaths.map((src, index) => (
            <MotionBox
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              mb={4}
              borderRadius="lg"
              overflow="hidden"
              bg="brand.secondary"
              position="relative"
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
                objectPosition="center"
              />
            </MotionBox>
          ))}
        </chakra.div>
      </Box>

      {/* Closing Section with Call to Action */}
      <VStack spacing={6} mt={{ base: 12, md: 16 }} px={4} textAlign="center">
        <Heading fontSize={{ base: '2xl', md: '4xl' }} color="brand.primary">
          Join Us on Our Journey
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl" color="brand.grayDark">
          Whether you're looking for the best lash extensions or want to train with the industry's finest, Doinitalash has something for everyone. Explore our gallery to see the artistry and passion behind our work.
        </Text>
        <NextLink href="/contact" passHref>
          <ChakraLink _hover={{ textDecoration: 'none' }}>
            <SexyButton>
              Contact Us
            </SexyButton>
          </ChakraLink>
        </NextLink>
      </VStack>
    </Box>
  )
}
