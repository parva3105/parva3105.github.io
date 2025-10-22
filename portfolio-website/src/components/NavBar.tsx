"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ResponsiveContainer } from "@/components/ResponsiveContainer"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(nav => nav.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium"
      >
        Skip to main content
      </a>

      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <ResponsiveContainer>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="#home" 
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
              onClick={() => scrollToSection("#home")}
            >
              Parva Shah
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary focus:outline-none focus:text-primary",
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </ResponsiveContainer>

        {/* Mobile Navigation Drawer */}
        <div className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-accent focus:text-accent-foreground",
                  activeSection === item.href.slice(1)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
