export type Project = {
  id: string
  title: string
  tagline?: string
  descriptionShort: string
  descriptionLong?: string // markdown allowed
  tech: string[]
  image?: string // local or remote
  links?: { label: 'GitHub'|'Demo'|'Case Study'|string; href: string }[]
  featured?: boolean
  year?: string
  status?: 'live'|'wip'|'archived'
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'myt-modyourtex',
    title: 'MYT: Mod-Your-Tex',
    tagline: 'A LaTex Resume Optimizer',
    descriptionShort: 'An optimizer that tailors your LaTeX resume to a job description using OpenAI API and compiles to PDF with tool orchestration.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'OpenAI', 'Tailwind CSS', 'LaTeX',],
    image: '/projects/myt-mod-your-tex.jpg',
    links: [
      { label: 'Demo', href: 'https://modyourtex.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/parva3105/resume-optimizer' },
    ],
    featured: true,
    year: '2025',
    status: 'live',
    tags: ['fullstack', 'resume', 'typescript', 'LLM']
  },
  {
    id: 'inmailer',
    title: 'InMailer',
    tagline: 'High-volume outreach that actually delivers',
    descriptionShort: 'React + Flask + PostgreSQL platform for templated campaigns, CSV imports, Google OAuth/Gmail API sending, and deliverability logs.',
    tech: ['React', 'Flask', 'Python', 'PostgreSQL', 'Gmail API', 'Google OAuth', 'JWT', 'REST', 'Docker'],
    image: '/projects/inmailer.jpg',
    links: [
      { label: 'Demo', href: 'https://inmailer.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/parva3105/InMailer' }
    ],
    featured: true,
    year: '2025',
    status: 'live',
    tags: ['email', 'fullstack', 'python']
  },
  {
    id: 'sellwizr-data-pipeline',
    title: 'Kafka Data Pipeline',
    tagline: 'From events to insights in seconds',
    descriptionShort: 'Go services producing and consuming Kafka topics with backpressure, idempotency, and containerized deployment.',
    tech: ['Go', 'Apache Kafka', 'Docker', 'Make', 'CI/CD'],
    image: '/projects/sellwizr-data-pipeline.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/parva3105/sellwizr-assessment' }
    ],
    featured: false,
    year: '2025',
    status: 'archived',
    tags: ['golang', 'streaming', 'kafka']
  },
  {
    id: 'ai-windows-assistant',
    title: 'AI Windows Assistant',
    tagline: 'Desktop automation with a modern UI',
    descriptionShort: 'React + Vite frontend with logs/history that bridges natural-language intents to system utilities.',
    tech: ['React', 'Vite', 'TypeScript', 'Electron', 'Node.js'],
    image: '/projects/ai-windows-assistant.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/parva3105/wrap-up' }
    ],
    featured: false,
    year: '2025',
    status: 'archived',
    tags: ['desktop', 'typescript', 'automation', 'LLM']
  },
  {
    id: 'gujarati-hate-speech-classifier',
    title: 'Gujarati Hate Speech Classifier',
    tagline: 'Indic-BERT with active learning',
    descriptionShort: 'Corpus building, fine-tuning, evaluation, and data-centric loops for minority-language safety.',
    tech: ['Python', 'Hugging Face Transformers', 'Indic-BERT', 'PyTorch', 'scikit-learn', 'pandas', 'Jupyter'],
    image: '/projects/gujarati-hate-speech.jpg',
    links: [
      { label: 'Case Study', href: 'https://github.com/parva3105/Gujarati-Hate-Speech-Classifier/blob/master/Gujarati-Hate-Speech-Classifier_ps7384.pdf' },
      { label: 'GitHub', href: 'https://github.com/parva3105/Gujarati-Hate-Speech-Classifier' }
    ],
    featured: true,
    year: '2025',
    status: 'live',
    tags: ['nlp', 'ml', 'research']
  },
  {
    id: 'club-management-app',
    title: 'Club Management App',
    tagline: 'Ops, members, and events in one place',
    descriptionShort: 'Full-stack nightclub management solution built by a 4-person team with CI/CD.',
    tech: ['SQL', 'Flask', 'Python', 'React'],
    image: '/projects/club-management-app.jpg',
    links: [
      { label: 'CodeBase', href: 'https://git.rc.rit.edu/swen-610-2023-01/db/db-team2/team-2-common' },
    ],
    featured: false,
    year: '2024',
    status: 'archived',
    tags: ['fullstack', 'team', 'rit']
  },
  {
    id: 'rideshare-app',
    title: 'Rideshare App',
    tagline: 'Reliable trips with geo-aware routing',
    descriptionShort: 'Platform with Django + PostgreSQL backend and a Node.js geolocation service; API prototyped in Flask.',
    tech: ['Django', 'PostgreSQL', 'Node.js', 'Geolocation APIs', 'Flask'],
    image: '/projects/rideshare-app.jpg',
    links: [
      { label: 'CodeBase', href: 'https://git.rc.rit.edu/swen-610-2023-01/db/db-team2/rest-ps7384' }
    ],
    featured: false,
    year: '2024',
    status: 'archived',
    tags: ['backend', 'django', 'maps']
  },
  {
    id: 'task-manager-api',
    title: 'Task Management API',
    tagline: 'Simple CRUD, solid foundations',
    descriptionShort: 'Express + MongoDB REST API with auth, file uploads for avatars, email via SendGrid, and task CRUD endpoints.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'SendGrid', 'Multer', 'Sharp', 'Bcrypt'],
    image: '/projects/task-manager.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/parva3105/task-manager' },
      { label: 'API Link', href: 'https://taskmanager-first.herokuapp.com/' }
    ],
    featured: true,
    year: '2023',
    status: 'live',
    tags: ['api', 'node', 'mongodb']
  },
  {
    id: 'copy-url',
    title: 'CopyURL',
    tagline: 'One-click URL copier for your browser toolbar',
    descriptionShort: 'Lightweight browser extension that copies the current tab’s URL to your clipboard on click. No tracking or external services.',
    tech: ['Chrome Extension', 'JavaScript'],
    image: '/projects/copy-url.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/parva3105/copy-url' },
      { label: 'Privacy Policy', href: 'https://github.com/parva3105/copy-url#readme' },
      { label: 'Demo', href: '#' }
    ],
    featured: false,
    year: '2025',
    status: 'wip',
    tags: ['extension', 'utility', 'javascript'],
  },
  {
    id: 'weather-app',
    title: 'WeatherApp',
    tagline: 'Real-time weather with geocoding',
    descriptionShort: 'Node + Express app that uses Mapbox for geocoding and Weatherstack for current conditions, rendered with Handlebars templates.',
    tech: ['Node.js', 'Express', 'Handlebars', 'Weatherstack API', 'Mapbox Geocoding', 'CSS'],
    image: '/projects/weather-app.jpg',
    links: [
      { label: 'Demo', href: 'https://weatherapp-first.herokuapp.com' },
      { label: 'GitHub', href: 'https://github.com/parva3105/weather-app' }
    ],
    featured: true,
    year: '2021',
    status: 'archived',
    tags: ['fullstack', 'api', 'node'],
  },
  {
    id: 'blog-app',
    title: 'Django Blog',
    tagline: 'Simple blog built with Django',
    descriptionShort: 'Basic blog project scaffold with a Django app and project, using templates and SQLite for storage.',
    tech: ['Python', 'Django', 'SQLite', 'HTML', 'CSS'],
    image: '/projects/blog-app.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/parva3105/blog-app' }
    ],
    featured: false,
    year: '2022',
    status: 'archived',
    tags: ['backend', 'django', 'python'],
  },
  {
    id: 'car-price-predicitions',
    title: 'Car Price Predictions',
    tagline: 'ML models to estimate used-car prices',
    descriptionShort: 'Supervised learning project to predict car prices from features like year, mileage, and fuel type. Includes data cleaning, feature encoding, model training, and evaluation.',
    tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Jupyter'],
    image: '/projects/car-price-predictions.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/parva3105/car-price-predicitions' }
    ],
    featured: false,
    year: '2022',
    status: 'archived',
    tags: ['ml', 'regression', 'python'],
  }
]

// Project templates for easy addition
export const projectTemplates = {
  fullFeature: {
    id: 'template-full',
    title: 'Your Project Title',
    tagline: 'Compelling tagline',
    descriptionShort: 'Brief description of your project (1-2 sentences).',
    descriptionLong: `# Your Project Title

A detailed description of your project using markdown.

## Key Features
- Feature 1
- Feature 2
- Feature 3

## Technical Implementation
- Technical detail 1
- Technical detail 2

## Results
- Result 1
- Result 2`,
    tech: ['Technology 1', 'Technology 2', 'Technology 3'],
    image: '/projects/your-project.jpg',
    links: [
      { label: 'Demo', href: 'https://your-demo.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/username/your-project' }
    ],
    featured: true,
    year: '2024',
    status: 'live',
    tags: ['tag1', 'tag2']
  },
  minimal: {
    id: 'template-minimal',
    title: 'Simple Project',
    descriptionShort: 'A simple project description.',
    tech: ['React', 'CSS'],
    links: [
      { label: 'GitHub', href: 'https://github.com/username/simple-project' }
    ],
    year: '2024',
    status: 'live'
  },
  spotlight: {
    id: 'template-spotlight',
    title: 'Featured Project',
    tagline: 'Showcase project',
    descriptionShort: 'A project worthy of the spotlight section.',
    descriptionLong: `# Featured Project

This is a detailed description for a featured project.

## Why This Project?
- Reason 1
- Reason 2

## Impact
- Impact 1
- Impact 2`,
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/featured-project.jpg',
    links: [
      { label: 'Demo', href: 'https://featured-demo.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/username/featured-project' },
      { label: 'Case Study', href: '/case-studies/featured-project' }
    ],
    featured: true,
    year: '2024',
    status: 'live',
    tags: ['showcase', 'featured']
  }
}
