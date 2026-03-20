"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "HTML", "CSS", "MATLAB"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Firebase", "MySQL"],
  },
  {
    category: "Data Science & AI",
    skills: ["NumPy", "Pandas", "Matplotlib", "scikit-learn", "OpenCV"],
  },
]

function SkillCategory({ category, index }: { category: (typeof skillCategories)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref as any}
      className={`neo-border bg-card p-6 space-y-4 ${isVisible ? "animate-scale-in" : "animate-on-scroll"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-lg md:text-xl font-bold">{category.category}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 border-2 border-foreground bg-accent font-bold text-xs md:text-sm hover:bg-secondary transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="skills" className="space-y-8" ref={ref as any}>
      <div className={`space-y-3 ${isVisible ? "animate-slide-in-left" : "animate-on-scroll"}`}>
        <h2 className="text-3xl md:text-5xl font-bold">Skills</h2>
        <div className="h-2 w-24 bg-secondary"></div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}
