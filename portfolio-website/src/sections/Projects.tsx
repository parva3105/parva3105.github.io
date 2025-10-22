"use client"

import { useState } from "react"
import { Grid3X3, Star, List, Filter } from "lucide-react"
import { ResponsiveContainer } from "@/components/ResponsiveContainer"
import { SectionHeader } from "@/components/SectionHeader"
import { ProjectCard } from "@/components/ProjectCard"
import { AnimationReveal } from "@/components/AnimationReveal"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

type ProjectVariant = "grid" | "spotlight" | "compact"

export function Projects() {
  const [variant, setVariant] = useState<ProjectVariant>("grid")
  const [filter, setFilter] = useState<string>("all")

  // Get all unique tags from projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags || [])))
  
  // Filter projects based on selected tag
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.tags?.includes(filter))

  // Get featured projects for spotlight variant
  const featuredProjects = projects.filter(project => project.featured)

  const renderProjects = () => {
    const projectsToRender = variant === "spotlight" ? featuredProjects : filteredProjects

    if (variant === "spotlight") {
      return (
        <div className="space-y-8">
          {projectsToRender.map((project, index) => (
            <AnimationReveal key={project.id} delay={index * 200}>
              <ProjectCard project={project} variant="spotlight" />
            </AnimationReveal>
          ))}
        </div>
      )
    }

    return (
      <div className={cn(
        "grid gap-6",
        variant === "grid" 
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
          : "grid-cols-1"
      )}>
        {projectsToRender.map((project, index) => (
          <AnimationReveal key={project.id} delay={index * 100}>
            <ProjectCard project={project} variant={variant} />
          </AnimationReveal>
        ))}
      </div>
    )
  }

  return (
    <section id="projects" className="py-20">
      <ResponsiveContainer>
        <div className="space-y-12">
          <AnimationReveal>
            <SectionHeader
              title="Featured Projects"
              subtitle="A showcase of my recent work and side projects"
              eyebrow="Portfolio"
              centered
            />
          </AnimationReveal>

          {/* Controls */}
          <AnimationReveal delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              {/* Variant Selector */}
              <div className="flex gap-2 p-1 bg-muted rounded-lg">
                <Button
                  variant={variant === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setVariant("grid")}
                  className="h-8"
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Grid
                </Button>
                <Button
                  variant={variant === "spotlight" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setVariant("spotlight")}
                  className="h-8"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Spotlight
                </Button>
                <Button
                  variant={variant === "compact" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setVariant("compact")}
                  className="h-8"
                >
                  <List className="w-4 h-4 mr-2" />
                  Compact
                </Button>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-3 py-1 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="all">All Projects</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </AnimationReveal>

          {/* Projects Grid */}
          <AnimationReveal delay={400}>
            {renderProjects()}
          </AnimationReveal>

          {/* Call to Action */}
          <AnimationReveal delay={600}>
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Interested in seeing more of my work?
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <a href="https://github.com/parvashah" target="_blank" rel="noopener noreferrer">
                    View All Projects
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contact">Let&apos;s Collaborate</a>
                </Button>
              </div>
            </div>
          </AnimationReveal>
        </div>
      </ResponsiveContainer>
    </section>
  )
}

function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
