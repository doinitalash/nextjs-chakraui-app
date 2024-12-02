'use client'

import {
  Box,
  Grid,
  Heading,
  Image,
  Text,
  Container,
  VStack,
  HStack,
  Select,
  Divider,
  IconButton,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
} from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight, FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'
import Link from 'next/link'

// Product type definition
interface Product {
  id: string
  name: string
  price: string
  image: string
}

// Mock data
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Volume Lash Kit',
    price: '$120',
    image: '/images/products/volume-lash-kit.jpg',
  },
  {
    id: '2',
    name: 'Lash Serum',
    price: '$35',
    image: '/images/products/lash-serum.jpg',
  },
  {
    id: '3',
    name: 'Classic Lash Curler',
    price: '$15',
    image: '/images/products/lash-curler.jpg',
  },
  {
    id: '4',
    name: 'Adhesive Remover',
    price: '$20',
    image: '/images/products/adhesive-remover.jpg',
  },
  {
    id: '5',
    name: 'Deluxe Lash Kit',
    price: '$150',
    image: '/images/products/volume-lash-kit.jpg',
  },
  {
    id: '6',
    name: 'Advanced Lash Serum',
    price: '$45',
    image: '/images/products/lash-serum.jpg',
  },
]

const PRODUCTS_PER_PAGE = 4

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [cart, setCart] = useState<Product[]>([]) // Explicitly type the cart state

  const totalPages = Math.ceil(PRODUCTS.length / PRODUCTS_PER_PAGE)
  const paginatedProducts = PRODUCTS.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  )

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]) // TypeScript now knows the type of 'cart'
    alert(`${product.name} added to your cart!`)
  }

  return (
    <Box bg="brand.secondary" color="brand.grayLight" py={16}>
      <Container maxW="7xl">
        {/* Breadcrumbs */}
        <Breadcrumb spacing="8px" separator=">">
          <BreadcrumbItem>
            <Link href="/" passHref>
              <Text as="a" color="pink.300" _hover={{ textDecoration: 'underline' }}>
                Home
              </Text>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Text color="gray.300">Shop</Text>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Header */}
        <Heading fontSize="4xl" color="pink.300" textAlign="left" mb={4}>
          All Products
        </Heading>
        <Text fontSize="lg" color="gray.400" mb={8}>
          {PRODUCTS.length} products
        </Text>

        {/* Filters and Sorting */}
        <HStack spacing={4} mb={6} alignItems="center">
          <Select placeholder="Collections" bg="gray.800" color="gray.300">
            <option value="lashes">Lashes</option>
            <option value="liquids">Liquids</option>
            <option value="tools">Tools</option>
          </Select>
          <Select placeholder="Product Type" bg="gray.800" color="gray.300">
            <option value="new-arrival">New Arrival</option>
            <option value="best-seller">Best Seller</option>
          </Select>
          <Select placeholder="Price" bg="gray.800" color="gray.300">
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </Select>
          <Select placeholder="Sort By" bg="gray.800" color="gray.300">
            <option value="relevance">Relevance</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </Select>
        </HStack>

        <Divider mb={6} borderColor="gray.700" />

        {/* Product Grid */}
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={6}
        >
          {paginatedProducts.map((product) => (
            <Box key={product.id} position="relative" borderRadius="lg" overflow="hidden" bg="brand.secondary">
              {/* Product Image */}
              <Link href={`/products/${product.id}`} passHref>
                <Box as="a" position="relative" display="block">
                  <Image
                    src={product.image}
                    alt={product.name}
                    w="100%"
                    h="250px"
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.03)' }}
                  />
                  {/* Add to Cart Icon */}
                  <IconButton
                    aria-label="Add to Cart"
                    icon={<FiShoppingCart />}
                    position="absolute"
                    top={4}
                    right={4}
                    size="sm"
                    colorScheme="pink"
                    onClick={(e) => {
                      e.preventDefault() // Prevents navigation
                      addToCart(product)
                    }}
                  />
                </Box>
              </Link>

              {/* Product Info */}
              <VStack py={4} spacing={1} textAlign="center">
                <Text fontSize="lg" fontWeight="bold" color="brand.grayLight" noOfLines={1}>
                  {product.name}
                </Text>
                <Text fontSize="md" color="pink.300" fontWeight="medium">
                  {product.price}
                </Text>
              </VStack>
            </Box>
          ))}
        </Grid>

        {/* Pagination Controls */}
        <Flex justify="center" align="center" mt={6} gap={2}>
          {/* Previous Page Button */}
          <IconButton
            icon={<FiArrowLeft />}
            aria-label="Previous Page"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            colorScheme="brand.grayDark"
            variant="ghost"
          />

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <Box
              key={index}
              as="button"
              w="30px"
              h="30px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg={currentPage === index + 1 ? 'whiteAlpha.300' : 'transparent'}
              color={currentPage === index + 1 ? 'white' : 'gray.400'}
              border="1px solid"
              borderColor={currentPage === index + 1 ? 'whiteAlpha.500' : 'gray.600'}
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              _hover={{
                bg: 'whiteAlpha.200',
                borderColor: 'whiteAlpha.400',
                color: 'white',
              }}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Box>
          ))}

          {/* Next Page Button */}
          <IconButton
            icon={<FiArrowRight />}
            aria-label="Next Page"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            colorScheme="brand.grayDark"
            variant="ghost"
          />
        </Flex>
      </Container>
    </Box>
  )
}
