export const projects = [
  {
    name: 'Mod-Your-Tex',
    description: 'LaTeX resume-tailoring web app. Ingests user .tex, optimizes against JD, compiles to PDF, returns direct download.',
    tech: ['Next.js', 'FastAPI', 'OpenAI', 'Tectonic'],
    tags: ['Input validation', 'structured error logging', 'basic auth', 'rate limiting', 'accessibility', 'CI/CD Vercel/Render', 'mock-based tests'],
  },
  {
    name: 'InMailer',
    description: 'Web-based email outreach automation. 5K–15K personalized emails/day with ≥95% delivery success, 10x faster campaigns, 200–500 daily users on free-tier infra.',
    tech: ['React', 'Flask', 'PostgreSQL'],
  },
  {
    name: 'Real-time Kafka Data Pipeline',
    description: 'Robust, scalable real-time messaging pipeline with structured JSON streaming and efficient inter-service communication.',
    tech: ['Go', 'Kafka', 'Docker Compose'],
  },
  {
    name: 'Rideshare App',
    description: 'Rideshare platform with geolocation APIs. Sketched API calls between client/server.',
    tech: ['Django', 'PostgreSQL', 'Node.js', 'Flask'],
  },
]
