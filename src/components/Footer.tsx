import { Box, Text, Link, HStack } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg="#111827" py={6} color="gray.300" textAlign="center">
      <Text mb={4}>© {new Date().getFullYear()} Doinitalash. All rights reserved.</Text>
      <HStack justify="center" spacing={4}>
        <Link href="/privacy-policy" _hover={{ color: 'white' }}>
          Privacy Policy
        </Link>
        <Link href="/terms" _hover={{ color: 'white' }}>
          Terms of Service
        </Link>
      </HStack>
    </Box>
  )
}
