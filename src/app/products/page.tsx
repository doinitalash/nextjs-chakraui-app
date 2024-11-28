'use client'

import { Box, Image, Text, VStack } from '@chakra-ui/react'

const products = [
  { id: 1, name: 'Lash Adhesive', price: '$25', image: '/lash-adhesive.jpg' },
  { id: 2, name: 'Growth Serum', price: '$35', image: '/growth-serum.jpg' },
  { id: 3, name: 'Reusable Lash Set', price: '$45', image: '/lash-set.jpg' },
]

export default function Products() {
  return (
    <VStack spacing={8} py={20}>
      {products.map((product) => (
        <Box key={product.id} bg="#242A36" p={4} borderRadius="md" shadow="md">
          <Image src={product.image} alt={product.name} />
          <Text mt={2} fontWeight="bold" color="gray.300">
            {product.name}
          </Text>
          <Text color="brand.500">{product.price}</Text>
        </Box>
      ))}
    </VStack>
  )
}
