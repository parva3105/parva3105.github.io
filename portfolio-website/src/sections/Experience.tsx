"use client"

import { Calendar, MapPin, Building2, Award } from "lucide-react"
import { ResponsiveContainer } from "@/components/ResponsiveContainer"
import { SectionHeader } from "@/components/SectionHeader"
import { AnimationReveal } from "@/components/AnimationReveal"

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.",
    achievements: [
      "Led a team of 5 developers in building a scalable e-commerce platform",
      "Improved application performance by 40% through optimization initiatives",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
  },
  {
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    type: "Full-time",
    description: "Developed and maintained multiple web applications from concept to deployment. Collaborated with cross-functional teams to deliver high-quality products.",
    achievements: [
      "Built a real-time collaboration platform serving 10,000+ users",
      "Redesigned user interface resulting in 25% increase in user engagement",
      "Established coding standards and best practices for the development team"
    ],
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Redis", "Heroku"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2019 - 2020",
    type: "Full-time",
    description: "Created responsive web applications and landing pages for various clients. Focused on user experience and modern web standards.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Implemented responsive design patterns improving mobile experience",
      "Collaborated with designers to create pixel-perfect implementations"
    ],
    technologies: ["React", "JavaScript", "CSS3", "Sass", "Webpack", "Figma"]
  }
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    location: "Boston, MA",
    period: "2015 - 2019",
    description: "Graduated with honors. Focused on software engineering, algorithms, and web development."
  }
]

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credential: "AWS-SAA-2023"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    credential: "GCP-PD-2022"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2021",
    credential: "META-REACT-2021"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <ResponsiveContainer>
        <div className="space-y-16">
          <AnimationReveal>
            <SectionHeader
              title="Experience & Education"
              subtitle="My professional journey and continuous learning"
              eyebrow="Career Path"
              centered
            />
          </AnimationReveal>

          {/* Work Experience */}
          <div className="space-y-8">
            <AnimationReveal>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                Work Experience
              </h3>
            </AnimationReveal>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <AnimationReveal key={index} delay={index * 200}>
                  <div className="relative pl-8 border-l-2 border-primary/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimationReveal>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <AnimationReveal>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Education
              </h3>
            </AnimationReveal>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <AnimationReveal key={index} delay={index * 200}>
                  <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {edu.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-3">{edu.description}</p>
                  </div>
                </AnimationReveal>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <AnimationReveal>
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h3>
            </AnimationReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <AnimationReveal key={index} delay={index * 100}>
                  <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border hover:bg-card/80 transition-all duration-300">
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-primary">{cert.date}</span>
                      <span className="text-xs text-muted-foreground">{cert.credential}</span>
                    </div>
                  </div>
                </AnimationReveal>
              ))}
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}
