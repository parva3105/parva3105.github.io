"use client"

import { Code, Palette, Zap, Users } from "lucide-react"
import { ResponsiveContainer } from "@/components/ResponsiveContainer"
import { SectionHeader } from "@/components/SectionHeader"
import { AnimationReveal } from "@/components/AnimationReveal"

const skills = [
  {
    category: "Languages",
    icon: Palette,
    technologies: ["Python", "Java", "C++", "JavaScript", "Go", "TypeScript"]
  },
  {
    category: "Frontend",
    icon: Palette,
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Backend",
    icon: Code,
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "AWS S3", "AWS Lambda"]
  },
  {
    category: "Tools & DevOps",
    icon: Zap,
    technologies: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "AWS Lambda"]
  },
  {
    category: "Collaboration",
    icon: Users,
    technologies: ["Agile", "Scrum", "Code Review", "Mentoring", "Team Leadership","SDLC"]
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
                  I’m a Software Engineer with 3+ years of experience building end-to-end products, from concept and
                  architecture to deployment and iteration. What began as curiosity about how software works transformed 
                  into a passion for delivering polished, user-focused solutions that scale.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <br/>
                    When I’m not engineering products, I’m experimenting with new tools, exploring modern architectures,
                    contributing to open-source, and sharing insights with the dev community. I&apos;m driven by collaboration,
                    continuous improvement, and building technology that solves real problems.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-primary">3+</div>
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
