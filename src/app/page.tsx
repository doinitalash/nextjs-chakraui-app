'use client'

import { Box, Heading, Text, } from '@chakra-ui/react'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import DynamicWave from '../components/DynamicWave'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Wave Divider
      <Box
        position="absolute"
        w="100%"
        h="80px"
        overflow="hidden"

        >
        <Box
          as="img"
          src="/wave.svg"
          alt="Wave Divider"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box> */}
      {/* Dynamic Wave with Animation */}
      <DynamicWave
        height={120}
        scrollSpeed={0.05} // Parallax speed
        amplitude={15} // Height of the waves
        frequency={0.02} // Frequency of wave peaks
        colorTop="#242A36"
        colorBottom="#1E232C"
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Products Section */}
      <Section id="products" title="Our Products">
        <Text>
          Check out our exclusive line of lash care products designed for long-lasting beauty.
        </Text>
      </Section>

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
