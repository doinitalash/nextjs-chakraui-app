'use client'

import { Box, Divider, Heading, Text, } from '@chakra-ui/react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ProductsSection from '../components/ProductsSection'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      <Divider
        borderWidth="2px"
        borderColor="transparent"
        bgGradient="linear(to-r, brand.primary, brand.secondary)"
        h="2px"
        my={8}
      />

      {/* Services Section */}
      <ServicesSection />

      <Divider
        borderWidth="2px"
        borderColor="transparent"
        bgGradient="linear(to-r, brand.primary, brand.secondary)"
        h="2px"
        my={8}
      />

      {/* Products Section */}
      <ProductsSection></ProductsSection>

      {/* Testimonials Section */}
      <Section id="testimonials" title="What Clients Say">
        <Text>
          "Amazing service and the best lashes I've ever had!" - Happy Client
        </Text>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact Us">
        <Text>We are located here.</Text>
      </Section>
    </>
  )
}

/* Reusable Section Component */
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Box id={id} py={20} bg="#242A36" color="gray.300" textAlign="center">
      <Heading size="lg" mb={4} color="pink.300">{title}</Heading>
      <Box>{children}</Box> {/* Use Box instead of Text for generic content */}
    </Box>
  )
}
