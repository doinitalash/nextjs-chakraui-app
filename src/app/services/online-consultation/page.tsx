'use client'

import { Text } from '@chakra-ui/react'
import ServicePageLayout from '../../../components/ServicePageLayout'

export default function OnlineConsultationPage() {
  return (
    <ServicePageLayout
      title="Online Consultation"
      description="Get expert lash advice and recommendations from the comfort of your home."
      category="online-consultation"
      pricing={[
        { title: 'Single Consultation', price: '$50', details: 'One-on-one consultation for personalized advice.' },
        { title: 'Monthly Plan', price: '$150', details: '4 weekly consultations for ongoing support.' },
      ]}
      testimonials={[
        { quote: 'The consultation was incredibly helpful!', author: 'Nina R.' },
        { quote: 'Finally, I feel confident about my lash care routine.', author: 'Chloe S.' },
      ]}
      media={[
        { type: 'image', src: '/images/services/consultation-demo.jpg' },
        { type: 'video', src: '/videos/online-consultation-preview.mp4' },
      ]}
      cta={{ text: 'Book Your Consultation', link: '/contact' }}
      showMedia={true}
      showTestimonials={true}
      showPricing={true}
    >

      <Text color="gray.300" fontSize="lg" mt={4}>
        Whether you're looking for tips to maintain your lashes or professional guidance on lash artistry, our online
        consultations provide personalized solutions just for you.
      </Text>
    </ServicePageLayout>
  )
}
