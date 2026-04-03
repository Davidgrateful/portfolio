'use client'

import { FC, useRef, useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { motion, useMotionValue, useTransform, animate } from 'motion/react'

function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

interface Props {
  label: string
  variant?: 'primary' | 'secondary'
  classes?: string
  animate?: boolean
  delay?: number
  href?: string
}

const MotionButton: FC<Props> = ({ label, classes, href }) => {
  const x = useMotionValue(0)
  const [complete, setComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track width for drag constraints
  const [trackWidth, setTrackWidth] = useState(174) // Default fallback (container 230 - 56)

  // Recalculate track width on mount/resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Track width = Container width - Circle diameter (48px) - Horizontal padding (8px total)
        setTrackWidth(containerRef.current.offsetWidth - 56)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Text fade-out animation as user slides
  const textOpacity = useTransform(x, [0, trackWidth * 0.4], [1, 0])
  const textX = useTransform(x, [0, trackWidth * 0.5], [0, 20])
  
  // Visual feedback: track progress bridge/fill
  const trackFillWidth = useTransform(x, [0, trackWidth], ["0%", "100%"])

  const handleDragEnd = () => {
    // If user dragged more than 85% of the way, trigger action
    if (x.get() > trackWidth * 0.85) {
      setComplete(true)
      // Play a small success bounce
      animate(x, trackWidth, { type: "spring", stiffness: 400, damping: 40 })
      
      if (href) {
        // Trigger the link
        window.open(href, '_blank', 'noopener,noreferrer')
      }
      
      // Reset state after a brief visual confirmation delay
      setTimeout(() => {
        animate(x, 0, { duration: 0.5 })
        setComplete(false)
      }, 1500)
    } else {
      // Snap back to start if not complete
      animate(x, 0, { type: "spring", stiffness: 400, damping: 40 })
    }
  }

  // Desktop click handler (support standard click as fallback)
  const handleContainerClick = () => {
    if (window.innerWidth > 768 && href && !complete) {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={cn(
        'group relative h-14 min-w-[240px] md:min-w-[280px] rounded-full border border-sec/10 bg-main p-1.5 overflow-hidden select-none touch-none cursor-pointer',
        classes
      )}
    >
      {/* Background Track Fill (visual feedback of depth) */}
      <motion.div 
        className="absolute inset-y-0 left-0 bg-sec/5 origin-left"
        style={{ width: trackFillWidth }}
      />

      {/* Button Text - Fades and shifts as you slide */}
      <motion.span 
        style={{ opacity: textOpacity, x: textX }}
        className='absolute inset-0 flex items-center justify-center text-sec font-cabinetGrotesk text-sm md:text-base font-bold tracking-tight uppercase z-10 pointer-events-none'
      >
        {label}
      </motion.span>

      {/* Draggable Circle Handle */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: trackWidth }}
        dragElastic={0.05}
        onDragEnd={handleDragEnd}
        style={{ x }}
        whileHover={window.innerWidth > 768 ? { scale: 1.05 } : {}}
        whileTap={{ cursor: 'grabbing' }}
        className={cn(
          "relative z-20 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-sec rounded-full cursor-grab shadow-sm transition-colors duration-300",
          complete && "bg-[#d4f534]"
        )}
      >
        <ArrowRight 
          className={cn(
            'size-5 md:size-6 transition-all duration-300', 
            complete ? 'text-sec scale-125 rotate-45' : 'text-main'
          )} 
        />
      </motion.div>

      {/* Help text on desktop (optional mobile hint) */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none hidden md:block">
        <ArrowRight className="size-4 text-sec" />
      </div>
    </div>
  )
}

export default MotionButton
