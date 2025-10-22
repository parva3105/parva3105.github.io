import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Project } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  project: Project
  variant?: "grid" | "spotlight" | "compact"
  className?: string
}

export function ProjectCard({ project, variant = "grid", className }: ProjectCardProps) {
  const renderTechPills = () => (
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech) => (
        <Badge 
          key={tech} 
          variant="secondary" 
          className="text-xs px-2 py-1 bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          {tech}
        </Badge>
      ))}
    </div>
  )

  const renderLinks = () => (
    <div className="flex gap-2 flex-wrap">
      {project.links?.map((link) => (
        <Button
          key={link.label}
          variant="outline"
          size="sm"
          asChild
          className="h-8 px-3 text-xs"
        >
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label === 'GitHub' ? (
              <Github className="w-3 h-3 mr-1" />
            ) : link.label === 'Demo' ? (
              <ExternalLink className="w-3 h-3 mr-1" />
            ) : null}
            {link.label}
          </Link>
        </Button>
      ))}
    </div>
  )

  if (variant === "compact") {
    return (
      <div className={cn(
        "group p-4 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300",
        className
      )}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg truncate">{project.title}</h3>
              {project.featured && (
                <Badge variant="default" className="text-xs">Featured</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {project.descriptionShort}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {project.year && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </div>
              )}
              {project.status && (
                <Badge 
                  variant={project.status === 'live' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {project.status}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {renderLinks()}
          </div>
        </div>
        <div className="mt-3">
          {renderTechPills()}
        </div>
      </div>
    )
  }

  if (variant === "spotlight") {
    return (
      <div className={cn(
        "group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl transition-all duration-500",
        className
      )}>
        {project.image && (
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 flex gap-2">
              {project.featured && (
                <Badge variant="default" className="bg-primary/90">Featured</Badge>
              )}
              {project.status && (
                <Badge 
                  variant={project.status === 'live' ? 'default' : 'secondary'}
                  className="bg-background/90"
                >
                  {project.status}
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            {project.tagline && (
              <p className="text-primary font-medium">{project.tagline}</p>
            )}
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {project.descriptionShort}
          </p>
          
          <div className="space-y-3">
            {renderTechPills()}
            {renderLinks()}
          </div>
        </div>
      </div>
    )
  }

  // Default grid variant
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:shadow-lg transition-all duration-300",
      className
    )}>
      {project.image && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            {project.featured && (
              <Badge variant="default" className="text-xs">Featured</Badge>
            )}
          </div>
        </div>
      )}
      
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
          {project.tagline && (
            <p className="text-sm text-primary">{project.tagline}</p>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.descriptionShort}
        </p>
        
        <div className="space-y-3">
          {renderTechPills()}
          {renderLinks()}
        </div>
        
        {project.year && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {project.year}
          </div>
        )}
      </div>
    </div>
  )
}
