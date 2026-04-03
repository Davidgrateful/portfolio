'use client'

import { FC } from 'react'
import { ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
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
  const Component = href ? 'a' : 'button'
  const componentProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {}

  return (
    <Component
      {...componentProps}
      className={cn(
        'group relative h-14 min-w-[230px] cursor-pointer rounded-full border border-foreground/10 bg-background p-1 outline-none inline-flex items-center',
        classes
      )}
    >
      <span
        className='circle bg-primary m-0 block h-12 w-12 overflow-hidden rounded-full duration-500 group-hover:w-[calc(100%-8px)]'
        aria-hidden='true'
      ></span>
      
      <div className='icon absolute top-1/2 left-4 -translate-y-1/2 duration-500 group-hover:translate-x-[0.4rem] flex items-center justify-center z-20'>
        <ArrowRight className='text-background group-hover:text-background size-6 transition-colors duration-500' />
      </div>

      <span className='button-text text-foreground group-hover:text-background font-cabinetGrotesk absolute top-1/2 left-[calc(48px+1.5rem)] -translate-y-1/2 text-lg font-bold tracking-tight whitespace-nowrap duration-500 z-20'>
        {label}
      </span>
    </Component>
  )
}

export default MotionButton
