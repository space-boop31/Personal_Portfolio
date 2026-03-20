"use client"

import { GraduationCap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Vellore Institute of Technology, Vellore",
    period: "2022 - 2026",
  },
  {
    degree: "Senior Secondary (XII), CBSE - Science",
    institution: "Jayshree Periwal High School, Jaipur",
    period: "2022",
    grade: "Percentage: 81.20%",
  },
]

function EducationCard({ edu, index }: { edu: (typeof education)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref as any}
      className={`neo-border bg-card p-6 space-y-3 ${isVisible ? "animate-slide-up" : "animate-on-scroll"}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex items-start gap-3">
        <GraduationCap className="h-6 w-6 flex-shrink-0 mt-1" />
        <div className="space-y-1 flex-1">
          <h3 className="text-lg md:text-xl font-bold">{edu.degree}</h3>
          <p className="text-sm md:text-base text-muted-foreground font-bold">{edu.institution}</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="neo-border bg-secondary px-3 py-1 font-bold inline-block">{edu.period}</span>
            {edu.grade && <span className="neo-border bg-accent px-3 py-1 font-bold inline-block">{edu.grade}</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Education() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section className="space-y-8" ref={ref as any}>
      <div className={`space-y-3 ${isVisible ? "animate-slide-in-left" : "animate-on-scroll"}`}>
        <h2 className="text-3xl md:text-5xl font-bold">Education</h2>
        <div className="h-2 w-24 bg-secondary"></div>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </div>
    </section>
  )
}
