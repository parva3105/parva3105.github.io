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
    id: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    tagline: 'Full-stack shopping experience',
    descriptionShort: 'A comprehensive e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    descriptionLong: `# Modern E-commerce Platform

A full-stack e-commerce application built with modern web technologies, featuring:

## Key Features
- **Real-time Inventory Management**: Live stock updates and notifications
- **Secure Payment Processing**: Integrated Stripe payment gateway
- **Admin Dashboard**: Complete order and product management
- **Responsive Design**: Mobile-first approach with PWA capabilities
- **Performance Optimized**: Sub-2s load times with image optimization

## Technical Implementation
- Server-side rendering for SEO optimization
- Database transactions for data consistency
- Caching strategies for improved performance
- Comprehensive error handling and logging

## Results
- 40% increase in conversion rate
- 99.9% uptime achieved
- 85% reduction in page load times`,
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Prisma'],
    image: '/projects/ecommerce-platform.jpg',
    links: [
      { label: 'Demo', href: 'https://ecommerce-demo.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/username/ecommerce-platform' },
      { label: 'Case Study', href: '/case-studies/ecommerce-platform' }
    ],
    featured: true,
    year: '2024',
    status: 'live',
    tags: ['fullstack', 'ecommerce', 'typescript']
  },
  {
    id: 'ai-chat-app',
    title: 'AI-Powered Chat Application',
    tagline: 'Intelligent conversation platform',
    descriptionShort: 'Real-time chat application with AI integration, featuring smart responses and conversation analytics.',
    descriptionLong: `# AI-Powered Chat Application

An intelligent chat platform that leverages AI to enhance user conversations and provide analytics insights.

## Features
- **AI Integration**: OpenAI GPT integration for smart responses
- **Real-time Messaging**: WebSocket-based instant messaging
- **Conversation Analytics**: AI-powered sentiment analysis and insights
- **Multi-platform Support**: Web, mobile, and desktop applications
- **Custom AI Models**: Fine-tuned models for specific use cases

## Technical Stack
- Real-time WebSocket communication
- AI model integration and fine-tuning
- Advanced analytics and reporting
- Scalable microservices architecture`,
    tech: ['React', 'Node.js', 'WebSocket', 'OpenAI API', 'MongoDB', 'Redis'],
    image: '/projects/ai-chat-app.jpg',
    links: [
      { label: 'Demo', href: 'https://ai-chat-demo.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/username/ai-chat-app' }
    ],
    featured: true,
    year: '2024',
    status: 'live',
    tags: ['ai', 'realtime', 'websocket']
  },
  {
    id: 'portfolio-optimizer',
    title: 'Portfolio Performance Optimizer',
    tagline: 'Investment analysis tool',
    descriptionShort: 'Financial analysis tool for portfolio optimization with risk assessment and performance tracking.',
    descriptionLong: `# Portfolio Performance Optimizer

A sophisticated financial analysis tool designed for portfolio optimization and risk management.

## Core Functionality
- **Portfolio Analysis**: Comprehensive risk and return analysis
- **Optimization Algorithms**: Modern portfolio theory implementation
- **Real-time Data**: Live market data integration
- **Risk Assessment**: Advanced risk metrics and stress testing
- **Performance Tracking**: Historical performance analysis

## Technical Features
- Complex financial calculations and algorithms
- Real-time data processing and visualization
- Secure data handling and encryption
- Responsive charts and interactive dashboards`,
    tech: ['Python', 'React', 'D3.js', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: '/projects/portfolio-optimizer.jpg',
    links: [
      { label: 'GitHub', href: 'https://github.com/username/portfolio-optimizer' },
      { label: 'Case Study', href: '/case-studies/portfolio-optimizer' }
    ],
    featured: false,
    year: '2023',
    status: 'live',
    tags: ['finance', 'python', 'data-analysis']
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
