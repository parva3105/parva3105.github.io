import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  eyebrow?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({ 
  title, 
  subtitle, 
  eyebrow, 
  className,
  centered = false 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "space-y-4",
      centered && "text-center",
      className
    )}>
      {eyebrow && (
        <p className="text-sm font-medium text-primary uppercase tracking-wider">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
