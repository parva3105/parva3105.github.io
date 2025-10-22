"use client"

import { Code, Palette, Zap, Users } from "lucide-react"
import { ResponsiveContainer } from "@/components/ResponsiveContainer"
import { SectionHeader } from "@/components/SectionHeader"
import { AnimationReveal } from "@/components/AnimationReveal"

const skills = [
  {
    category: "Frontend",
    icon: Palette,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    icon: Code,
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    category: "Tools & DevOps",
    icon: Zap,
    technologies: ["Git", "Docker", "AWS", "Vercel", "Figma"]
  },
  {
    category: "Collaboration",
    icon: Users,
    technologies: ["Agile", "Scrum", "Code Review", "Mentoring", "Team Leadership"]
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <ResponsiveContainer>
        <div className="space-y-16">
          <AnimationReveal>
            <SectionHeader
              title="About Me"
              subtitle="Passionate developer with a love for creating meaningful digital experiences"
              eyebrow="Who I Am"
              centered
            />
          </AnimationReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationReveal direction="right">
              <div className="space-y-6">
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I&apos;m a full-stack developer with over 5 years of experience building web applications 
                    that solve real-world problems. My journey started with curiosity about how websites work, 
                    and it has evolved into a passion for creating elegant, performant, and user-friendly solutions.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I believe in continuous learning and staying 
                    up-to-date with the latest trends in web development.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </AnimationReveal>

            <AnimationReveal direction="left">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <AnimationReveal key={skill.category} delay={index * 100}>
                        <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border hover:bg-card/80 transition-all duration-300">
                          <div className="flex items-center gap-3 mb-4">
                            <Icon className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold">{skill.category}</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </AnimationReveal>
                    )
                  })}
                </div>
              </div>
            </AnimationReveal>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}
