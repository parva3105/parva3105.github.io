"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimationRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  distance?: number
}

export function AnimationReveal({ 
  children, 
  className, 
  delay = 0,
  direction = "up",
  distance = 20 
}: AnimationRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  const getTransform = () => {
    if (isVisible) return "translate(0, 0)"
    
    switch (direction) {
      case "up":
        return `translate(0, ${distance}px)`
      case "down":
        return `translate(0, -${distance}px)`
      case "left":
        return `translate(${distance}px, 0)`
      case "right":
        return `translate(-${distance}px, 0)`
      case "fade":
        return "translate(0, 0)"
      default:
        return `translate(0, ${distance}px)`
    }
  }

  const getOpacity = () => {
    return isVisible ? 1 : 0
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        className
      )}
      style={{
        transform: getTransform(),
        opacity: getOpacity(),
      }}
    >
      {children}
    </div>
  )
}
