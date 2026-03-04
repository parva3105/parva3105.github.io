export const projects = [
  {
    name: 'Mod-Your-Tex',
    description:
      'Built a LaTeX resume-tailoring web app (Next.js, FastAPI) that optimizes resumes against job descriptions and returns compiled PDFs. Added authentication, rate limiting, logging, and testing for reliability.',
    tech: ['Next.js', 'FastAPI', 'OpenAI', 'Tectonic'],
    tags: ['Input validation', 'structured error logging', 'auth', 'rate limiting', 'CI/CD'],
  },
  {
    name: 'InMailer',
    description:
      'Designed scalable outreach automation platform enabling small teams to run personalized campaigns efficiently under limited infrastructure. Handles 5K–15K emails/day with ≥95% delivery success.',
    tech: ['React', 'Flask', 'PostgreSQL', 'FastAPI'],
    tags: ['Personalization', 'campaign automation', 'scalability'],
  },
  {
    name: 'Real-time Kafka Data Pipeline',
    description:
      'Built a robust scalable real-time messaging pipeline using GoLang, Kafka, and Docker Compose, ensuring structured JSON data streaming and efficient inter-service communication, significantly improving data processing reliability.',
    tech: ['Go', 'Kafka', 'Docker Compose'],
    tags: ['Streaming', 'JSON data', 'inter-service communication'],
  },
  {
    name: 'Rideshare App',
    description:
      'Engineered a rideshare platform using Django and PostgreSQL incorporating geolocation APIs using NodeJS. Sketched the API calls between client/server using Flask.',
    tech: ['Django', 'PostgreSQL', 'Node.js', 'Flask'],
    tags: ['Geolocation APIs', 'client-server architecture'],
  },
]
