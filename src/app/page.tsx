import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Book, Calendar, Code, Cpu, Lightbulb, Users, Sparkles, Brain, Rocket, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10 py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="font-bold text-2xl text-white">
            <span className="text-gradient">The Gen-C</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">Who We Are</a>
            <a href="#what-we-do" className="text-white/80 hover:text-white transition-colors">What We Do</a>
            <a href="#events" className="text-white/80 hover:text-white transition-colors">Events</a>
            <Button variant="glow" asChild>
              <a href="#join">Join Us</a>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <span className="sr-only">Open menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Particle Animation */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <div className="particle-container" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="ai-badge mb-6 mx-auto">
              <span className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                Generative AI Learning Community
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text">
              <span className="text-gradient">Empowering</span> Singapore with 
              <div className="text-carousel">
                <span>Generative AI</span>
                <span>Prompt Engineering</span>
                <span>LLM Technologies</span>
                <span>AI Applications</span>
              </div>
            </h1>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Training, upskilling and empowering students and working adults with cutting-edge 
              Generative AI tools and techniques through a vibrant learning community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow" size="lg" asChild>
                <a href="#events">
                  Upcoming Events
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/20 hover:bg-white/5">
                <a href="#about">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative" id="about">
        <div className="gradient-blob gradient-blob-1"></div>
        <div className="gradient-blob gradient-blob-2"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="section-heading text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
              <div className="heading-underline"></div>
            </div>
            <div className="relative mb-12">
              <div className="mission-card bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-lg mb-6 text-white/90">"Empower Singapore through Generative AI education"</p>
                
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Community</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Students</span>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Professionals</span>
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">AI Enthusiasts</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-4">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Values</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium mb-2 text-purple-400">Community</h4>
                    <p className="text-sm text-white/80">Build a vibrant learning community</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium mb-2 text-blue-400">Practical</h4>
                    <p className="text-sm text-white/80">Focus on practical, real-world applications</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium mb-2 text-indigo-400">Innovation</h4>
                    <p className="text-sm text-white/80">Foster innovation and experimentation</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium mb-2 text-violet-400">Collaboration</h4>
                    <p className="text-sm text-white/80">Promote knowledge sharing and collaboration</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              We are a group of individuals who are passionate about contributing as a community 
              towards building up AI talents and boosting the AI practitioner pool in Singapore. 
              We come together to learn, discuss & experiment with Generative AI, and also run 
              training events and workshops for the public.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
              <div className="team-card">
                <div className="profile-image">
                  <div className="image-placeholder">RG</div>
                </div>
                <div className="profile-info">
                  <h3 className="text-xl font-semibold">Ray Goh</h3>
                  <p className="text-white/60">Co-founder & Community Lead</p>
                  <p className="mt-4 text-white/80">
                    IT executive in the banking industry with extensive experience in AI and machine learning technologies.
                  </p>
                </div>
              </div>
              <div className="team-card">
                <div className="profile-image">
                  <div className="image-placeholder">MC</div>
                </div>
                <div className="profile-info">
                  <h3 className="text-xl font-semibold">Mike Chee</h3>
                  <p className="text-white/60">Co-founder & Technology Lead</p>
                  <p className="mt-4 text-white/80">
                    IT executive specializing in cloud technologies and Generative AI implementations.
                  </p>
                </div>
              </div>
            </div>
            <div className="community-circles mt-20">
              <div className="section-heading text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">Our Community Members</h3>
                <p className="text-white/80">
                  AI/ML and Cloud enthusiasts & experts from diverse industries
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="industry-circle">Finance</div>
                <div className="industry-circle">Media</div>
                <div className="industry-circle">Academia</div>
                <div className="industry-circle">Public Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 relative" id="what-we-do">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="section-heading text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
              <div className="heading-underline"></div>
              <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto">
                We plan events and meet-ups partnering with AWS, which provides us with technical 
                expertise and support for using Generative AI services in the Cloud.
              </p>
            </div>
            
            <div className="activities-grid">
              <div className="activity-card">
                <div className="activity-icon">
                  <Calendar className="h-8 w-8" />
                </div>
                <div className="activity-content">
                  <h3 className="text-xl font-semibold mb-2">Workshops & Training</h3>
                  <p className="text-white/80">
                    Regular hands-on learning experiences covering prompt engineering, working with 
                    LLMs, fine-tuning models, and building AI applications.
                  </p>
                </div>
              </div>
              
              <div className="activity-card">
                <div className="activity-icon">
                  <Users className="h-8 w-8" />
                </div>
                <div className="activity-content">
                  <h3 className="text-xl font-semibold mb-2">Community Meet-ups</h3>
                  <p className="text-white/80">
                    Networking and knowledge-sharing events to discuss the latest trends and 
                    developments in Generative AI.
                  </p>
                </div>
              </div>
              
              <div className="activity-card">
                <div className="activity-icon">
                  <Cpu className="h-8 w-8" />
                </div>
                <div className="activity-content">
                  <h3 className="text-xl font-semibold mb-2">AWS Partnerships</h3>
                  <p className="text-white/80">
                    Technical expertise and support for cloud-based AI services, with access 
                    to AWS resources and tools.
                  </p>
                </div>
              </div>
              
              <div className="activity-card">
                <div className="activity-icon">
                  <Rocket className="h-8 w-8" />
                </div>
                <div className="activity-content">
                  <h3 className="text-xl font-semibold mb-2">Experimentation & Innovation</h3>
                  <p className="text-white/80">
                    Hackathons, challenges, and collaborative projects to explore emerging AI 
                    technologies and develop practical applications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="skills-section mt-20">
              <div className="section-heading text-center mb-12">
                <h3 className="text-2xl font-semibold mb-4">Skills We Focus On</h3>
              </div>
              <div className="skills-container">
                <div className="skill-card">
                  <Book className="h-6 w-6" />
                  <h4>Prompt Engineering</h4>
                  <div className="skill-progress-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-card">
                  <Brain className="h-6 w-6" />
                  <h4>LLM Optimization</h4>
                  <div className="skill-progress-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-card">
                  <Code className="h-6 w-6" />
                  <h4>AI Application Dev</h4>
                  <div className="skill-progress-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 relative" id="events">
        <div className="gradient-blob gradient-blob-3"></div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="section-heading text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
              <div className="heading-underline"></div>
              <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto">
                Join us for workshops, meetups, and other events to enhance your Generative AI skills.
              </p>
            </div>
            
            <div className="event-timeline">
              <div className="event-card">
                <div className="event-date">
                  <div className="date-box">
                    <span className="month">JUN</span>
                    <span className="day">15</span>
                  </div>
                </div>
                <div className="event-details">
                  <div className="event-tag">Workshop</div>
                  <h3 className="text-xl font-semibold">Introduction to Prompt Engineering</h3>
                  <p className="text-white/80">
                    Learn the fundamentals of crafting effective prompts for generative AI models.
                  </p>
                  <div className="event-meta">
                    <span><Calendar className="h-4 w-4" /> 2:00 PM - 5:00 PM</span>
                    <span><MessageSquare className="h-4 w-4" /> AWS Office, Mapletree Business City</span>
                  </div>
                  <Button variant="glow" size="sm" className="mt-4">Register Now</Button>
                </div>
              </div>
              
              <div className="event-card">
                <div className="event-date">
                  <div className="date-box">
                    <span className="month">JUN</span>
                    <span className="day">22</span>
                  </div>
                </div>
                <div className="event-details">
                  <div className="event-tag">Masterclass</div>
                  <h3 className="text-xl font-semibold">LLM Fine-tuning Masterclass</h3>
                  <p className="text-white/80">
                    Advanced techniques for fine-tuning large language models for specific applications.
                  </p>
                  <div className="event-meta">
                    <span><Calendar className="h-4 w-4" /> 10:00 AM - 4:00 PM</span>
                    <span><MessageSquare className="h-4 w-4" /> Online via Zoom</span>
                  </div>
                  <Button variant="glow" size="sm" className="mt-4">Register Now</Button>
                </div>
              </div>
              
              <div className="event-card">
                <div className="event-date">
                  <div className="date-box">
                    <span className="month">JUL</span>
                    <span className="day">05</span>
                  </div>
                </div>
                <div className="event-details">
                  <div className="event-tag">Networking</div>
                  <h3 className="text-xl font-semibold">Gen-C Community Meetup</h3>
                  <p className="text-white/80">
                    Join us for networking, knowledge sharing, and discussions on the latest in generative AI.
                  </p>
                  <div className="event-meta">
                    <span><Calendar className="h-4 w-4" /> 6:30 PM - 8:30 PM</span>
                    <span><MessageSquare className="h-4 w-4" /> The Working Capitol, Robinson Road</span>
                  </div>
                  <Button variant="glow" size="sm" className="mt-4">Register Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join/CTA Section */}
      <section className="py-20 relative" id="join">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="join-card">
              <div className="glowing-border"></div>
              <div className="join-content">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
                <p className="text-lg text-white/80 mb-8">
                  Connect with like-minded individuals, learn from industry experts, and enhance your Generative AI skills.
                </p>
                <form className="join-form">
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="form-input" 
                    />
                    <Button variant="glow" size="lg" type="submit">
                      Subscribe
                    </Button>
                  </div>
                </form>
                <div className="social-links mt-8">
                  <a href="#" className="social-icon"><span className="sr-only">LinkedIn</span><svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                  <a href="#" className="social-icon"><span className="sr-only">Twitter</span><svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                  <a href="#" className="social-icon"><span className="sr-only">GitHub</span><svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <Link href="/" className="font-bold text-xl text-white">
                <span className="text-gradient">The Gen-C</span>
              </Link>
              <p className="text-sm text-white/50 mt-1">
                Generative AI Learning Community
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-white/50">
                &copy; {new Date().getFullYear()} The Gen-C. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
