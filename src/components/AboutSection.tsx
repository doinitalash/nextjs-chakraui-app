import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  VStack,
} from '@chakra-ui/react'
import ImageCard from './ImageCard'
import NextLink from 'next/link'
import SexyButton from './SexyButton'

export default function AboutUsSection() {
  const aboutCards = [
    {
      title: 'Lash Master at Work',
      description: 'Witness the artistry and precision of our lash masters as they create stunning looks.',
      imgSrc: '/images/about/lash-master-at-work.jpg',
    },
    {
      title: 'Lash Extensions Close-Up',
      description: 'See the intricate details that make our lash extensions stand out.',
      imgSrc: '/images/about/lash-extensions-closeup.jpg',
    },
    {
      title: 'Training Session with Students',
      description: 'Get a glimpse of our immersive training sessions for aspiring lash artists.',
      imgSrc: '/images/about/training-session.jpg',
    },
  ]

  return (
    <Box
      id="about"
      as="section"
      pt="calc(var(--header-height, 80px))" // Adjust for fixed navbar height
      pb={{ base: 12, md: 20 }}
      px={4}
      bg="#242A36"
      color="white"
      boxShadow="0 10px 20px rgba(0, 0, 0, 0.5)"
    >
      {/* Heading Section */}
      <VStack spacing={4} textAlign="center" mb={{ base: 8, md: 12 }}>
        <Heading color="pink.300" fontSize={{ base: '2xl', md: '4xl' }}>
          About
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.300" maxW="3xl" mx="auto">
          At Doinitalash, we specialize in creating stunning lash extensions and training the next generation of lash
          artists. Our expertise combines innovation, artistry, and a touch of elegance to ensure the best results for
          our clients.
        </Text>
      </VStack>

      {/* Card Grid Section */}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 6, md: 8 }}
        maxW="7xl"
        mx="auto"
      >
        {aboutCards.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}
      </SimpleGrid>

      {/* Learn More Button */}
      <Box textAlign="center" mt={{ base: 8, md: 12 }}>
        <NextLink href="/about" passHref>
          <ChakraLink _hover={{ textDecoration: 'none' }}>
            <SexyButton>Learn More</SexyButton>
          </ChakraLink>
        </NextLink>
      </Box>
    </Box>
  )
}
