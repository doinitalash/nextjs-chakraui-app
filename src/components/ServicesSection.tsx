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
      id="services"
      as="section"
      pt="calc(var(--header-height, 80px))" // Adjusts for navbar height
      pb={16}
      px={8}
      bg="#242A36"
      textAlign="center"
      color="white"
    >
      {/* Section Heading */}
      <VStack spacing={4} textAlign="center" mb={{ base: 8, md: 12 }}>
        <Heading color="pink.300" fontSize={{ base: '2xl', md: '4xl' }}>
          Services
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} maxW="3xl" mx="auto" color="gray.300">
          At Doinitalash, we provide premium lash services and training tailored to meet your needs. Explore our offerings
          and take the first step to elevate your lash game.
        </Text>
      </VStack>
      {/* Service Cards */}
      <SimpleGrid columns={[1, 1, 3]} spacing={10}>
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
      _hover={{ transform: 'scale(1.02)', boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)' }}
    >
      {/* Title */}
      <Heading size="md" color="pink.300">
        {title}
      </Heading>
      {/* Description */}
      <Text color="gray.300" fontSize="sm">
        {description}
      </Text>
      {/* Call-to-Action Button */}
      <NextLink href={link} passHref>
        <SexyButton>Explore</SexyButton>
      </NextLink>
    </VStack>
  )
}
