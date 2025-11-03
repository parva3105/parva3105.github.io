"use client"

import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResponsiveContainer } from "@/components/ResponsiveContainer"
import { AnimationReveal } from "@/components/AnimationReveal"

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <ResponsiveContainer className="relative z-10">
        <div className="text-center space-y-8">
          <AnimationReveal direction="fade" delay={200}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="text-primary">Parva Shah</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Software Engineer crafting innovative solutions and creative fixes.
              </p>
            </div>
          </AnimationReveal>

          <AnimationReveal direction="up" delay={400}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Software engineer with experience building distributed systems, optimizing performance, and shipping production-ready features.
            Committed to building technology that is efficient, scalable, and user-centric.
            </p>
          </AnimationReveal>

          <AnimationReveal direction="up" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </AnimationReveal>

          <AnimationReveal direction="up" delay={800}>
            <div className="flex justify-center">
              <button
                onClick={scrollToNext}
                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Scroll to next section"
              >
                <span className="text-sm">Scroll to explore</span>
                <ArrowDown className="w-5 h-5 animate-bounce group-hover:animate-none" />
              </button>
            </div>
          </AnimationReveal>
        </div>
      </ResponsiveContainer>
    </section>
  )
}
