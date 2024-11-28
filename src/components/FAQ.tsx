import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Input,
    VStack,
    Icon,
  } from '@chakra-ui/react'
  import { InfoOutlineIcon } from '@chakra-ui/icons'
  import { faqs } from '../data/faqs'
  import { useState } from 'react'
  
  interface FAQProps {
    category: string // Service category to filter FAQs
  }
  
  export default function FAQ({ category }: FAQProps) {
    const [searchQuery, setSearchQuery] = useState('')
  
    // Filter FAQs based on category and search query
    const filteredFAQs = faqs
      .filter((faq) => faq.category === category)
      .filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
      )
  
    return (
      <Box
        bg="rgba(255, 255, 255, 0.2)"
        color="white"
        p={8}
        borderRadius="md"
        mt={8}
        backdropFilter="blur(10px)"
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
      >
        <VStack spacing={4} align="stretch">
          {/* Glass Morphism Styled Input */}
          <Input
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            bg="rgba(255, 255, 255, 0.3)"
            color="white"
            border="none"
            _placeholder={{ color: 'gray.300' }}
            _focus={{
              boxShadow: '0 0 0 3px pink.400',
              outline: 'none',
            }}
            backdropFilter="blur(10px)"
            borderRadius="md"
            px={4}
            py={3}
            transition="box-shadow 0.2s ease"
          />
  
          <Accordion allowToggle allowMultiple>
            {filteredFAQs.map((faq) => (
              <AccordionItem key={faq.id} border="none">
                <AccordionButton _hover={{ bg: 'gray.600' }}>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="semibold"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon as={InfoOutlineIcon} color="yellow.200" mr={2} />
                    {highlightText(faq.question, searchQuery)}
                  </Box>
                </AccordionButton>
                <AccordionPanel pb={4} color="gray.300">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
            {filteredFAQs.length === 0 && (
              <Box textAlign="center" py={4} color="gray.400">
                No FAQs match your search.
              </Box>
            )}
          </Accordion>
        </VStack>
      </Box>
    )
  }
  
  /**
   * Highlight matching text
   * @param text The full text to display
   * @param query The search term to highlight
   */
  function highlightText(text: string, query: string) {
    if (!query) return text
  
    const regex = new RegExp(`(${query})`, 'gi')
  
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(
            regex,
            (match) => `<mark style="background: transparent; color: #F687B3;">${match}</mark>`
          ),
        }}
      />
    )
  }
  
  
  