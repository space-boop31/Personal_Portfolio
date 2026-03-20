"use client"

import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "AI Detection of Breast Cancer and its Prediction",
    period: "Jun 2025 - Sep 2025",
    description:
      "Trained an AI-powered breast cancer detection system to differentiate between malignant and benign tumors on a dataset with 569 entries.",
    highlights: [
      "Engineered and evaluated multiple machine learning models, achieved an accuracy of 97.31%",
      "Implemented multiple machine learning models (Logistic Regression, Random Forest, Decision Trees) and selected the best-performing model achieving the precision rate of 98%",
    ],
  },
  {
    title: "Employee Management Website",
    period: "Jul 2025 - Sep 2025",
    description:
      "This is an Employee Management Website that helps track the status of the task posted by the employer to the employee.",
    highlights: [],
  },
  {
    title: "NextGen Data Manager",
    period: "May 2025 - Aug 2025",
    description:
      "Developed a full-stack CRUD application using React, Node.js, and MongoDB to streamline business data management with a highly intuitive user interface and robust backend services.",
    highlights: [
      "Optimized performance through efficient database indexing, query optimization, and responsive design, achieving significant improvements in load times and user engagement",
    ],
  },
  {
    title: "Sign Language Detection",
    period: "Feb 2025 - Jul 2025",
    description: "Analyses visual data to identify hand shapes, positions, and movements.",
    highlights: [
      "Using Deep Learning algorithms like convolutional neural networks (CNNs) trained on extensive sign language gesture datasets",
      "This allows the model to accurately translate signs into spoken language or text in real-time, fostering inclusivity and breaking down communication barriers",
    ],
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref as any}
      className={`neo-border bg-card p-6 space-y-4 hover:bg-accent transition-all duration-300 hover:scale-[1.02] ${
        isVisible ? "animate-scale-in" : "animate-on-scroll"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg md:text-xl font-bold text-balance">{project.title}</h3>
          <ExternalLink className="h-5 w-5 flex-shrink-0 mt-1" />
        </div>
        <p className="text-xs md:text-sm font-bold text-muted-foreground">{project.period}</p>
      </div>

      <p className="text-sm md:text-base leading-relaxed">{project.description}</p>

      {project.highlights.length > 0 && (
        <ul className="space-y-1.5 list-none">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex gap-2 text-xs md:text-sm leading-relaxed">
              <span className="font-bold mt-0.5">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="projects" className="space-y-8" ref={ref as any}>
      <div className={`space-y-3 ${isVisible ? "animate-slide-in-left" : "animate-on-scroll"}`}>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <div className="h-2 w-24 bg-secondary"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
