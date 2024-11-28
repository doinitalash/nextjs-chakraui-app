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
      border= "1px solid rgba(255, 255, 255, 0.1)"
      overflow="hidden"
      boxShadow="0 4px 16px rgba(0, 0, 0, 0.3)"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{ transform: 'scale(1.02)', boxShadow: '0 0 20px rgba(255, 105, 180, 0.4)' }}
    >
      {/* Image Wrapper */}
      <Box position="relative" w="full" h="200px">
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
        <Text fontWeight="bold" fontSize="lg" color="pink.300">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.300">
          {description}
        </Text>
      </VStack>
    </Box>
  )
}
