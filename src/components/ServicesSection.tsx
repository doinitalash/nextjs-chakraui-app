'use client'

import { Box, SimpleGrid, VStack, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import SexyButton from './SexyButton'

export default function ServicesSection() {
  const services = [
    {
      title: 'Lash Extensions',
      description: 'Enhance your natural beauty with full fills and refills for a lasting, glamorous look.',
      link: '/services/lash-extensions',
    },
    {
      title: 'Lash Courses',
      description: 'Join our beginner or advanced training sessions and master the art of lash extensions.',
      link: '/services/lash-courses',
    },
    {
      title: 'Online Consultation',
      description: 'Get expert advice to perfect your lash look, no matter where you are.',
      link: '/services/online-consultation',
    },
  ]

  return (
    <Box
      as="section"
      id="services"
      pt="calc(var(--header-height, 80px))" // Adjusts for navbar height
      pb={16}
      px={{ base: 4, md: 8 }} // Adjust padding for better spacing on smaller screens
      bg="brand.secondary"
      textAlign="center"
      color="brand.grayLight"
    >
      {/* Section Heading */}
      <VStack spacing={4} textAlign="center" mb={{ base: 8, md: 12 }}>
        <Heading color="brand.primary" fontFamily="'Playfair Display', serif" fontWeight="bold" fontSize={{ base: '2xl', md: '4xl' }}>
          Services
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl" mx="auto" color="brand.grayLight">
          At Doinitalash, we provide premium lash services and training tailored to meet your needs. Explore our offerings
          and take the first step to elevate your lash game.
        </Text>
      </VStack>

      {/* Service Cards */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </SimpleGrid>
    </Box>
  )
}

/* Service Card Component */
function ServiceCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <VStack
      bg="rgba(26, 32, 44, 0.9)"
      backdropFilter="blur(8px)"
      p={6}
      borderRadius="lg"
      boxShadow="0 4px 16px rgba(0, 0, 0, 0.3)"
      textAlign="center"
      spacing={6}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)',
        outline: 'none',
      }}
      _focus={{
        outline: 'none',
        boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)', // Ensure focus also has a box-shadow for accessibility
      }}
    >
      {/* Title */}
      <Heading size="md" color="brand.primary" fontSize={{ base: 'xl', md: '2xl' }}>
        {title}
      </Heading>
      {/* Description */}
      <Text color="brand.grayLight" fontSize="sm">
        {description}
      </Text>
      {/* Call-to-Action Button */}
      <NextLink href={link} passHref>
        <SexyButton>Explore</SexyButton>
      </NextLink>
    </VStack>
  )
}
