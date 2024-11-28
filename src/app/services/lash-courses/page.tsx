'use client'

import ServicePageLayout from '../../../components/ServicePageLayout'
import { Text } from '@chakra-ui/react'

export default function LashCoursesPage() {
  return (
    <ServicePageLayout
      title="Lash Courses"
      description="Join our comprehensive lash courses, designed for beginners and advanced artists alike."
      category="lash-courses"
      pricing={[
        { title: 'Beginner Course', price: '$350', details: 'Perfect for those starting their lash artistry journey.' },
        { title: 'Advanced Course', price: '$450', details: 'Elevate your skills with advanced lash techniques.' },
      ]}
      testimonials={[
        { quote: 'The training was amazing! I feel ready to start my lash business.', author: 'Amanda L.' },
        { quote: 'Learned so much from the instructors. Highly recommended!', author: 'Sophia G.' },
      ]}
      media={[
        { type: 'image', src: '/images/about/training-session.jpg' },
        { type: 'image', src: '/images/about/student-work-1.jpg' },
        { type: 'video', src: '/videos/lash-course-preview.mp4' },
      ]}
      cta={{ text: 'Join Our Next Course', link: '/contact' }}
      showMedia={true}
      showTestimonials={true}
      showPricing={true}
    >
 
      <Text color="gray.300" fontSize="lg" mt={4}>
        Learn from industry experts in our hands-on training sessions. From basic techniques to advanced artistry, our
        courses are tailored to meet your goals. Train with us and become a certified lash artist!
      </Text>
    </ServicePageLayout>
  )
}
