'use client'

import { Box, VStack, Heading, Text } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import FAQ from './FAQ'
import FAQStructuredData from './FAQStructuredData' // SEO component
import SexyButton from './SexyButton'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

// Pricing Section Component
function PricingSection({ pricing }: { pricing: { title: string; price: string; details: string }[] }) {
  return (
    <Box
      mt={8}
      p={8}
      borderRadius="lg"
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
    >
      <Heading size="lg" color="pink.300" mb={4}>
        Pricing
      </Heading>
      <VStack spacing={6}>
        {pricing.map((item, index) => (
          <Box
            key={index}
            p={4}
            borderRadius="md"
            bg="rgba(255, 255, 255, 0.1)"
            w="100%"
            display="flex"
            justifyContent="space-between"
            boxShadow="0 4px 16px rgba(0, 0, 0, 0.1)"
          >
            <Text fontWeight="bold" color="white">
              {item.title}
            </Text>
            <Text color="pink.300">{item.price}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

// Testimonials Section Component
function TestimonialsSection({ testimonials }: { testimonials: { quote: string; author: string }[] }) {
  return (
    <Box
      mt={8}
      p={8}
      borderRadius="lg"
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
    >
      <Heading size="lg" color="pink.300" mb={4}>
        What Our Clients Say
      </Heading>
      <VStack spacing={6}>
        {testimonials.map((testimonial, index) => (
          <MotionBox
            key={index}
            p={4}
            borderRadius="md"
            bg="rgba(255, 255, 255, 0.05)"
            boxShadow="0 4px 16px rgba(0, 0, 0, 0.1)"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Text color="gray.300" fontStyle="italic">
              "{testimonial.quote}"
            </Text>
            <Text color="pink.300" textAlign="right" mt={2}>
              — {testimonial.author}
            </Text>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  )
}

// Media Section Component
function MediaSection({ media }: { media?: { type: 'image' | 'video'; src: string }[] }) {
  if (!media || media.length === 0) return null
  return (
    <Box
      mt={8}
      p={4}
      borderRadius="lg"
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
    >
      <Heading size="lg" color="pink.300" mb={4}>
        Media
      </Heading>
      <VStack spacing={6}>
        {media.map((item, index) => (
          <Box key={index} borderRadius="lg" overflow="hidden" shadow="md">
            {item.type === 'image' ? (
              <img src={item.src} alt={`Media ${index + 1}`} style={{ width: '100%' }} />
            ) : (
              <video controls style={{ width: '100%' }}>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  )
}

// CTA Button Component
function CTAButton({ text, link }: { text: string; link: string }) {
  return (
    <SexyButton as="a" href={link}>
      {text}
    </SexyButton>
  )
}

// Main ServicePageLayout Component
export default function ServicePageLayout({
  title,
  description,
  children,
  bgImage,
  category,
  pricing,
  testimonials,
  media,
  cta,
  showFAQ = true,
  showTestimonials = true,
  showPricing = true,
  showMedia = true,
  ctaPosition = 'bottom', // Default is bottom
}: {
  title: string
  description: string
  children?: React.ReactNode
  bgImage?: string
  category: string
  pricing?: { title: string; price: string; details: string }[]
  testimonials?: { quote: string; author: string }[]
  media?: { type: 'image' | 'video'; src: string }[]
  cta?: { text: string; link: string }
  showFAQ?: boolean
  showTestimonials?: boolean
  showPricing?: boolean
  showMedia?: boolean
  ctaPosition?: 'top' | 'bottom' // New prop
}) {
  // Import FAQs directly
  const { faqs } = require('../data/faqs')

  // Filter FAQs for the given category
  const filteredFAQs = faqs.filter((faq: { category: string }) => faq.category === category)

  return (
    <Box
      as="section"
      py={16}
      px={8}
      bg={
        bgImage
          ? `url(${bgImage})`
          : {
              base: 'linear-gradient(145deg, rgba(255, 105, 180, 0.7), rgba(200, 50, 120, 0.5))',
              md: 'linear-gradient(145deg, rgba(255, 105, 180, 0.5), rgba(180, 40, 110, 0.4))',
            }
      }
      bgAttachment="fixed" // Parallax background effect
      bgSize="cover"
      bgPosition="center"
      textAlign="center"
      color="white"
      minH="100vh"
      position="relative"
      zIndex={0}
    >
      <Box bg="rgba(0, 0, 0, 0.6)" p={8} borderRadius="lg">
        <VStack spacing={8} maxW="4xl" mx="auto">
          {/* Title */}
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading size="2xl" color="pink.300">
              {title}
            </Heading>
          </MotionBox>

          {/* Description */}
          <Text fontSize="lg" color="gray.300">
            {description}
          </Text>

          {/* CTA Button at Top */}
          {cta && ctaPosition === 'top' && <CTAButton text={cta.text} link={cta.link} />}

          {/* Children */}
          {children}

          {/* Pricing Section */}
          {showPricing && pricing && <PricingSection pricing={pricing} />}

          {/* Testimonials Section */}
          {showTestimonials && testimonials && <TestimonialsSection testimonials={testimonials} />}

          {/* FAQ Section */}
          {showFAQ && (
            <Suspense fallback={<div>Loading FAQ...</div>}>
              <FAQ category={category} />
            </Suspense>
          )}
          <FAQStructuredData faqs={filteredFAQs} />

          {/* Media Section */}
          {showMedia && media && <MediaSection media={media} />}

          {/* CTA Button at Bottom */}
          {cta && ctaPosition === 'bottom' && <CTAButton text={cta.text} link={cta.link} />}
        </VStack>
      </Box>
    </Box>
  )
}
