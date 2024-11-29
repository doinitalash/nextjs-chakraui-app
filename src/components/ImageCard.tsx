import { Box, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

interface ImageCardProps {
  title: string
  description: string
  imgSrc: string
}

export default function ImageCard({ title, description, imgSrc }: ImageCardProps) {
  return (
    <Box
      bg="rgba(36, 42, 54, 0.8)"
      backdropFilter="blur(8px)"
      borderRadius="lg"
      border="1px solid rgba(255, 255, 255, 0.1)"
      overflow="hidden"
      boxShadow="0 4px 16px rgba(0, 0, 0, 0.3)"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ transform: 'scale(1.05)', boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)' }}
      _focus={{ outline: 'none', boxShadow: '0 0 20px rgba(255, 105, 180, 0.6)' }}
      _active={{ transform: 'scale(1.02)', boxShadow: '0 0 15px rgba(255, 105, 180, 0.5)' }}
    >
      {/* Image Wrapper */}
      <Box position="relative" w="full" h={{ base: '180px', md: '200px' }}>
        <Image
          src={imgSrc}
          alt={title}
          layout="fill"
          objectFit="cover" // Ensures images retain aspect ratio
          objectPosition="center" // Centers the image
        />
      </Box>

      {/* Content */}
      <VStack spacing={2} p={4} align="center" textAlign="center">
        <Text
          fontWeight="bold"
          fontSize={{ base: 'lg', md: 'xl' }} // Responsive title font size
          color="pink.300"
          lineHeight={1.4}
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: 'sm', md: 'md' }} // Responsive description font size
          color="gray.300"
          lineHeight={1.6}
        >
          {description}
        </Text>
      </VStack>
    </Box>
  )
}
