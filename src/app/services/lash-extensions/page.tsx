'use client'

import ServicePageLayout from '../../../../src/components/ServicePageLayout'
import { Text } from '@chakra-ui/react'

export default function LashExtensionsPage() {
  return (
    <ServicePageLayout
      title="Lash Extensions"
      description="Enhance your beauty with our premium lash extension services. Full fills, refills, and more."
      category="lash-extensions"
      pricing={[
        { title: 'Full Set', price: '$120', details: 'Complete lash extension application.' },
        { title: 'Refills', price: '$60', details: 'Touch up your lash extensions.' },
      ]}
      testimonials={[
        { quote: 'Absolutely loved my lashes!', author: 'Jessica B.' },
        { quote: 'The best lash artists in the business!', author: 'Emily T.' },
      ]}
      media={[
        { type: 'image', src: '/images/services/lash-extensions-demo.jpg' },
      ]}
      cta={{ text: 'Book Your Appointment', link: '/book-now' }}
      ctaPosition='top'
      showMedia={true}
      showTestimonials={true}
      showPricing={true}
    >

      <Text color="gray.300" fontSize="lg" mt={4}>
        Our expert lash artists use top-quality materials to provide you with stunning, long-lasting lashes. Whether
        you're looking for a natural look or something bold, we have you covered. Trust us for lashes that will make
        heads turn.
      </Text>
    </ServicePageLayout>
  )
}
