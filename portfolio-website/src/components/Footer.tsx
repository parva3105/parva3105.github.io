import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { ResponsiveContainer } from "@/components/ResponsiveContainer"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/parva3105",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/parva3105",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:work.parry@gmail.com",
    icon: Mail,
  },
]

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <ResponsiveContainer>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Parva Shah</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Full-stack developer passionate about creating innovative solutions and beautiful user experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Visit ${link.name} profile`}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Available for freelance work</p>
                <p>Open to new opportunities</p>
                <Link
                  href="mailto:parva@example.com"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  parva@example.com
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Parva Shah. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Built with Compassion and using Next.js & Tailwind CSS</span>
              <Link
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                Deployed on Vercel
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}
