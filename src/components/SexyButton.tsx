import { Button, ButtonProps } from '@chakra-ui/react'

interface SexyButtonProps extends ButtonProps {
  href?: string // Optional: for link buttons
}

export default function SexyButton({
  children,
  ...props
}: SexyButtonProps) {
  return (
    <Button
      bg="rgba(255, 255, 255, 0.2)" // Glass-like background
      color="white" // Text color remains white
      fontWeight="bold"
      borderRadius="md"
      px={10}
      py={6}
      backdropFilter="blur(10px)" // Glassmorphism effect
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)" // Soft shadow
      transition="all 0.3s ease"
      _hover={{
        bg: 'rgba(255, 255, 255, 0.3)', // Slightly lighter background
        boxShadow: '0 0 15px 4px rgba(255, 105, 180, 0.8)', // Pink glow effect
        color: 'white', // Text stays white
      }}
      _active={{
        transform: 'translateY(2px)', // Press effect
      }}
      _focus={{
        outline: 'none',
        boxShadow: '0 0 0 3px rgba(255, 105, 180, 0.5)', // Focus outline for accessibility
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
