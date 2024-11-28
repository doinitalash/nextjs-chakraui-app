'use client'

import {
  Box,
  VStack,
  Heading,
  Text,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import SexyButton from './SexyButton'

const MotionBox = motion(Box)

export default function Hero() {
  const isMobile = useBreakpointValue({ base: true, md: false })

  const svgFiles = ['/svgs/1.svg', '/svgs/2.svg', '/svgs/3.svg', '/svgs/4.svg', '/svgs/5.svg']

  // Dynamically generate blobs and lashes based on screen size
  const { blobs, lashes } = useMemo(() => {
    const numBlobs = 7 // Fixed number of blobs
    const numLashes = isMobile ? 15 : 40 // Fewer lashes on mobile
    const generatedBlobs = Array(numBlobs)
      .fill('')
      .map(() => ({
        size: Math.random() * 150 + 200, // Blob size (200px to 350px)
        x: Math.random() * 100, // Starting position (X%)
        y: Math.random() * 100, // Starting position (Y%)
        duration: Math.random() * 20 + 15, // Animation duration
      }))

    const generatedLashes = Array(numLashes)
      .fill('')
      .map(() => ({
        src: svgFiles[Math.floor(Math.random() * svgFiles.length)],
        top: Math.random() * 100, // Random position (top%)
        left: Math.random() * 100, // Random position (left%)
        duration: Math.random() * 30 + 20, // Animation duration
      }))

    return { blobs: generatedBlobs, lashes: generatedLashes }
  }, [isMobile])

  return (
    <Box
      as="section"
      id="hero"
      bgGradient="linear(to-b, pink.500, gray.900)"
      position="relative"
      h="100vh"
      overflow="hidden"
      color="white"
    >
      {/* Lava Lamp Blobs */}
      {blobs.map((blob, index) => (
        <LavaBlob
          key={index}
          size={blob.size}
          x={blob.x}
          y={blob.y}
          duration={blob.duration}
        />
      ))}

      {/* Floating Lashes */}
      {lashes.map((lash, index) => (
        <FloatingLash
          key={index}
          src={lash.src}
          top={lash.top}
          left={lash.left}
          duration={lash.duration}
        />
      ))}

      {/* Content */}
      <VStack
        position="relative"
        zIndex={1}
        h="full"
        justify="center"
        spacing={6}
        textAlign="center"
        px={4}
      >
        <Heading
          size={isMobile ? 'lg' : '2xl'}
          bgClip="text"
          bgGradient="linear(to-r, pink.300, pink.400)"
          fontWeight="extrabold"
        >
          Welcome to Doinitalash
        </Heading>

        <Text fontSize={isMobile ? 'sm' : 'md'} maxW="90%" mx="auto">
          Experience premium-quality lash extensions designed to elevate your beauty.
        </Text>

        <SexyButton
          onClick={() => console.log('Book Now clicked!')}
        >
          Book Now
        </SexyButton>
      </VStack>
    </Box>
  )
}

/* Lava Blob Component */
function LavaBlob({
  size,
  x,
  y,
  duration,
}: {
  size: number
  x: number
  y: number
  duration: number
}) {
  const randomX1 = Math.random() * 300 - 150 // Random movement range (horizontal)
  const randomY1 = Math.random() * 200 - 100 // Random movement range (vertical)

  return (
    <MotionBox
      position="absolute"
      top={`${y}%`}
      left={`${x}%`}
      w={`${size}px`}
      h={`${size}px`}
      bgGradient="radial(pink.400, pink.500, transparent)"
      borderRadius="full"
      opacity={0.4}
      animate={{
        x: [0, randomX1, 0],
        y: [0, randomY1, 0],
        scale: [1, 1.2, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

/* Floating Lash Component */
function FloatingLash({
  src,
  top,
  left,
  duration,
}: {
  src: string
  top: number
  left: number
  duration: number
}) {
  const randomRotation = Math.random() * 360 // Random starting rotation
  const randomX1 = Math.random() * 150 - 75 // Random horizontal movement
  const randomX2 = Math.random() * 150 - 75
  const randomY1 = Math.random() * 150 - 75 // Random vertical movement
  const randomY2 = Math.random() * 150 - 75

  return (
    <MotionBox
      position="absolute"
      top={`${top}%`}
      left={`${left}%`}
      w="80px"
      h="auto"
      animate={{
        x: [0, randomX1, randomX2, 0],
        y: [0, randomY1, randomY2, 0],
        rotate: [randomRotation, randomRotation + 180, randomRotation + 360],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
      }}
      zIndex={0}
    >
      <Image src={src} alt="Floating Lash" w="full" />
    </MotionBox>
  )
}
