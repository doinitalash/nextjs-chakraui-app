export interface FAQ {
  id: number
  question: string
  answer: string
  category: string
}

export const faqs: FAQ[] = [
    {
      id: 1,
      category: 'lash-extensions',
      question: 'What is the duration of a lash extension session?',
      answer: 'Typically 2-3 hours depending on the style.',
    },
    {
      id: 2,
      category: 'lash-extensions',
      question: 'How long do lash extensions last?',
      answer: 'Lash extensions usually last 3-6 weeks with proper care.',
    },
    {
      id: 3,
      category: 'lash-courses',
      question: 'Are the lash courses beginner-friendly?',
      answer: 'Yes, we have courses tailored for beginners and advanced artists.',
    },
    {
      id: 4,
      category: 'lash-courses',
      question: 'Do I receive a certificate after completing the course?',
      answer: 'Yes, all participants receive an industry-recognized certificate.',
    },
    {
      id: 5,
      category: 'online-consultation',
      question: 'What can I expect from an online consultation?',
      answer: 'Expert advice tailored to your lash concerns and goals.',
    },
    {
      id: 6,
      category: 'online-consultation',
      question: 'Can I reschedule an online consultation?',
      answer: 'Absolutely! Reach out to us 24 hours before your appointment.',
    },
  ]
  