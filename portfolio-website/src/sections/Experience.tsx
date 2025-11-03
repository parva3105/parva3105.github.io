"use client"

import { Calendar, MapPin, Building2, Award } from "lucide-react"
import { ResponsiveContainer } from "@/components/ResponsiveContainer"
import { SectionHeader } from "@/components/SectionHeader"
import { AnimationReveal } from "@/components/AnimationReveal"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "SellWizr",
    location: "New York, NY",
    period: "May'25 - August'25",
    type: "Internship",
    description: "Develeoped an end-to-end data pipeline for which consumes data using native scrapers.",
    achievements: [
      "Built an AWS pipeline (EC2 + SQS + S3) processing 10K+ requests/day (~300K/mo) and ~2 GB/day, using batching/right-sized compute to reduce per-ingest cost while scaling reliably.",
      "Engineered a Python scraper (BeautifulSoup, Requests, asyncio) parsing 150+ profiles/hour (~3.6K/day) at ~95% accuracy, replacing manual/third-party work to save recurring vendor fees and ops hours each month.",
      "Added CloudWatch monitoring and Auto Scaling to handle traffic spikes, cutting idle capacity and cloud spend while improving reliability."
    ],
    technologies: ["Python", "BeautifulSoup", "Requests", "asyncio", "AWS EC2", "AWS SQS", "AWS S3", "Amazon CloudWatch", "AWS Auto Scaling"]

  },
  {
    title: "Graduate Software Engineer",
    company: "Rochester Institute of Technology",
    location: "Rochester, NY",
    period: "Jan'24 - Aug'25",
    type: "Full-time",
    description: "Automation, analysis, and debugging infrastructure for research and teaching systems.",
    achievements: [
      "Replaced manual processes with Python scripts + cron, shrinking effort from 10+ hrs/week → <3 hrs/week (≈7+ hrs/week saved → ~350+ hrs/year of regained capacity).",
      "Reverse-engineered 6,000+ WeChat mini-apps (APKTool/JADX/Wireshark) to flag malicious behaviors—hardening security posture at scale. ",
      "Automated API tracing via Python middleware, improving debugging across hundreds of endpoints—faster issue resolution, fewer costly regressions."
    ],
    technologies: ["Python", "Cron", "Logging Middleware", "REST APIs", "APKTool", "JADX", "Wireshark"]
  },
  {
    title: "Software Engineer",
    company: "Zenture IT",
    location: "Remote",
    period: "Aug'22 - Aug'23",
    type: "Full-time",
    description: "Modernized a legacy stack and boosted throughput for data-heavy workflows.",
    achievements: [
      "Migrated UI jQuery/PHP → React, cutting page load from 2.5s → 1.2s for 500+ daily users (≈52% faster; improved conversion and support costs).",
      "Designed a Java thread-pooling system, raising throughput from 20K → 30K records/hour (≈50% gain; lower compute time per batch).",
      "Delivered React + Flask PoCs that helped onboard 500+ customers, accelerating sales cycles and reducing bespoke engineering time. "
    ],
    technologies: ["React", "Java", "Flask", "jQuery", "PHP"]

  },
  {
    title: "Research Assistant",
    company: "Concordia University",
    location: "Montreal, Canada",
    period: "May'22 - Aug'23",
    type: "Internship",
    description: "ML research + tooling to speed data processing and raise model quality. ",
    achievements: [
      "Re-implemented the ULP algorithm in TensorFlow/Keras, improving model accuracy by 25% (fewer costly misclassifications downstream).",
      "Built a Django UI with Pandas/NumPy for log parsing, shrinking processing time from 10h → 6h (≈40% faster; reduced compute + analyst hours). ",
      "Ran an ML testing pipeline (scikit-learn + CV) processing 12M+ log entries in 2h vs 6h (~3× speedup; quicker experiment cycles)."
    ],
    technologies: ["TensorFlow", "Keras", "Django", "Pandas", "NumPy", "scikit-learn"]

  }
]

const education = [
  {
    degree: "Master of Science in Software Engineering",
    institution: "Rochester Institute of Technology",
    location: "Rochester, NY",
    period: "2023-2025",
    description: "Graduated with Distinction. Focused on software engineering, algorithms, and Software Architecture."
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Gujarat Technological University",
    location: "Ahmedabad, Gujarat",
    period: "2019-2023",
    description: "Graduated with Distinction. With MITACS Scholarship and GRI Funding for Masters"
  }
]

const certifications = [
  {
    name: "MITACS Globalink Reserach Intern",
    issuer: "MITACS",
    date: "2023",
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2025",
  },
  {
    name: "React Developer Certification",
    issuer: "Udemy",
    date: "2021",
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
