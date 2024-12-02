'use client';

import { Box, SimpleGrid, Heading, Text, VStack, Link, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import SexyButton from './SexyButton';

export default function ServicesSection() {
  const services = [
    {
      title: 'Lash Extensions',
      description:
        'Enhance your natural beauty with full fills and refills for a lasting, glamorous look.',
      link: '/services/lash-extensions',
    },
    {
      title: 'Lash Courses',
      description:
        'Join our beginner or advanced training sessions and master the art of lash extensions.',
      link: '/services/lash-courses',
    },
    {
      title: 'Online Consultation',
      description:
        'Get expert advice to perfect your lash look, no matter where you are.',
      link: '/services/online-consultation',
    },
  ];

  return (
    <Box
      as="section"
      id="services"
      bg="brand.secondary"
      color="brand.grayLight"
      pt={{ base: 10, md: 16 }}
      pb={{ base: 10, md: 16 }}
      px={{ base: 6, md: 12 }}
    >
      {/* Section Heading */}
      <VStack spacing={4} textAlign="center" mb={10}>
        <Heading as="h2" size="xl" color="brand.primary">
          Our Services
        </Heading>
        <Text fontSize="lg" maxW="4xl" color="brand.grayLight">
          At Doinitalash, we provide premium lash services and training tailored
          to meet your needs. Explore our offerings and take the first step to
          elevate your lash game.
        </Text>
      </VStack>

      {/* Services Grid */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={8}
        justifyItems="center"
      >
        {services.map((service, index) => (
          <Flex
            key={index}
            bg="brand.accent"
            p={6}
            borderRadius="md"
            shadow="md"
            maxW="sm"
            direction="column"
            justifyContent="space-between"
            align="center"
            textAlign="center"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Box mb={4}>
              <Heading as="h3" size="md" mb={4} color="brand.primary">
                {service.title}
              </Heading>
              <Text color="brand.grayLight">{service.description}</Text>
            </Box>
            <NextLink href={service.link} passHref>
              <Link>
                <SexyButton>Explore</SexyButton>
              </Link>
            </NextLink>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
}
