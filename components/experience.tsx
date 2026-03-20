"use client"

import { Briefcase, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    title: "Web Developer",
    company: "SleekSky LLC",
    location: "Virtual",
    period: "Jan 2026 - Feb 2026",
    highlights: [
      "Built and customized healthcare website templates using HTML, CSS, and a headless CMS so clients could easily manage their own content",
      "Supported development of Bay Area Health Web (bayareahealthweb.com) and contributed to regional digital campaigns across the Bay Area",
      "Performed SEO and social media sharing audits to improve search visibility and optimize preview metadata",
    ],
  },
  {
    title: "Software Developer",
    company: "Freelancing",
    location: "Virtual",
    period: "Oct 2025 - Nov 2025",
    highlights: [
      "Spearheaded the design and development of a core housing application that improved workflow efficiency by 60%, collaborating with cross-functional teams to integrate and scale it seamlessly for over 10,000 corporate users",
      "Managed both frontend and backend development, implementing testing protocols that reduced bugs by 40%, driving a 75% increase in customer satisfaction",
    ],
  },
  {
    title: "Lead Developer",
    company: "Clafena",
    location: "Virtual",
    period: "May 2025 - Sep 2025",
    highlights: [
      "Developed essential backend functionalities, including news article shuffling, social media marketing automation, email newsletter automation, and LLM output optimization, aligning with core product needs",
      "Implemented backend testing protocols that decreased crashes by 20% and ensured safer, high-quality releases, driving a 50% increase in customer satisfaction",
    ],
  },
]

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref as any}
      className={`neo-border bg-card p-6 md:p-8 space-y-4 hover:bg-accent transition-all duration-300 hover:scale-[1.02] ${
        isVisible ? "animate-slide-up" : "animate-on-scroll"
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
          <div className="flex items-center gap-2 text-muted-foreground font-bold">
            <Briefcase className="h-4 w-4" />
            <span>
              {exp.company} • {exp.location}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 neo-border bg-secondary px-4 py-2 font-bold text-sm w-fit">
          <Calendar className="h-4 w-4" />
          <span>{exp.period}</span>
        </div>
      </div>

      <ul className="space-y-2 list-none">
        {exp.highlights.map((highlight, idx) => (
          <li key={idx} className="flex gap-3 text-sm md:text-base leading-relaxed">
            <span className="font-bold mt-1">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="experience" className="space-y-8" ref={ref as any}>
      <div className={`space-y-3 ${isVisible ? "animate-slide-in-left" : "animate-on-scroll"}`}>
        <h2 className="text-3xl md:text-5xl font-bold">Work Experience</h2>
        <div className="h-2 w-24 bg-secondary"></div>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  )
}
