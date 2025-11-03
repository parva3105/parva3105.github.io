"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { ResponsiveContainer } from "@/components/ResponsiveContainer"
import { SectionHeader } from "@/components/SectionHeader"
import { AnimationReveal } from "@/components/AnimationReveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "work.parry@gmail.com",
    href: "mailto:work.parry@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (848) 482-0769",
    href: "tel:+18484820769"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, NY",
    href: "#"
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20">
      <ResponsiveContainer>
        <div className="space-y-16">
          <AnimationReveal>
            <SectionHeader
              title="Get In Touch"
              subtitle="Ready to work together? Let's discuss your next project"
              eyebrow="Contact"
              centered
            />
          </AnimationReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimationReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m always interested in new opportunities and exciting projects. 
                    Whether you have a question, want to collaborate, or just want to say hi, 
                    I&apos;d love to hear from you!
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <AnimationReveal key={info.label} delay={index * 100}>
                        <a
                          href={info.href}
                          className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border hover:bg-card/80 transition-all duration-300 group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{info.label}</p>
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                          </div>
                        </a>
                      </AnimationReveal>
                    )
                  })}
                </div>

                <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <h4 className="font-semibold mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to emails within 24 hours. For urgent matters, 
                    feel free to call or text.
                  </p>
                </div>
              </div>
            </AnimationReveal>

            {/* Contact Form */}
            <AnimationReveal direction="left">
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </AnimationReveal>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  )
}
