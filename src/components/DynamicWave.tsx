'use client'

import { Box } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

export default function DynamicWave({
  
  height = 120,
  colorTop = '#242A36',
  colorBottom = '#1E232C',
  frequency = 0.02,
  amplitude = 10,
  scrollSpeed = 0.1, // Parallax effect speed
}: {
  height?: number
  colorTop?: string
  colorBottom?: string
  frequency?: number
  amplitude?: number
  scrollSpeed?: number
}) {
  console.log('DynamicWave Component Rendered')

  const waveRef = useRef<SVGPathElement | null>(null)
  const [scrollOffset, setScrollOffset] = useState(0)

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || 0
      console.log('Scroll event detected:', window.scrollY);

      setScrollOffset(scrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      console.log('useEffect: Scroll Listener Detached')
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Update Wave Path on Scroll
  useEffect(() => {
    if (waveRef.current) {
      const wavePath = generateWavePath(scrollOffset * scrollSpeed, frequency, amplitude, height)
      waveRef.current.setAttribute('d', wavePath)
    }
  }, [scrollOffset, frequency, amplitude, height, scrollSpeed])

  return (
    <Box
      position="relative"
      w="100%"
      h={`${height}px`}
      overflow="hidden"
      bgGradient={`linear(to-b, ${colorTop}, ${colorBottom})`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colorTop} />
            <stop offset="100%" stopColor={colorBottom} />
          </linearGradient>
        </defs>
        <path
          ref={waveRef}
          d={generateWavePath(0, frequency, amplitude, height)} // Initial static path
          fill="url(#waveGradient)"
        />
      </svg>
    </Box>
  )
}

function generateWavePath(
  offset: number,
  frequency: number,
  amplitude: number,
  height: number
): string {
  const width = 1440
  const segments = 30
  const points: string[] = []

  for (let i = 0; i <= segments; i++) {
    const x = (i / segments) * width
    const y =
      Math.sin((i / segments + offset) * Math.PI * 2 * frequency) * amplitude +
      height / 2
    points.push(`${x},${y}`)
  }

  return `M0,${height} ${points.map((p) => `L${p}`).join(' ')} L1440,${height} Z`
}
