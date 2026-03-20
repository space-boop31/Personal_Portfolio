"use client"

import { Award, BookOpen, Users } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const achievements = [
  {
    type: "Patent",
    title: "Self Cleaning Glass Case System",
    description: "Integrated cutting-edge automated hygiene solutions to enhance the guest experience",
    icon: Award,
  },
  {
    type: "Publication",
    title: "Rooftop Solar Panel Detection from Satellite Imagery",
    description:
      "Using Detection Transformer for Indian Terrain, presented at the 3rd International Conference on Advancements in Smart, Secure and Intelligent Computing",
    icon: BookOpen,
  },
]

const activities = [
  {
    organization: "Fintech Club VIT Bhopal",
    role: "Core Member of Content and Design Team",
    description:
      "Crafted posters and narratives to deliver key messages and spread awareness regarding finance. Collaborated closely with other members to align textual content with visual elements.",
    icon: Users,
  },
  {
    organization: "Dramatics, VIT Bhopal",
    role: "Core Member of Management Team",
    description: "Secured 5th place in Darpan (Stage Play Competition) at Advitya 2023, VIT Bhopal",
    icon: Users,
    date: "March 2023",
  },
]

export function Extras() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const achievementsRef = useScrollAnimation(0.1)
  const activitiesRef = useScrollAnimation(0.1)

  return (
    <section className="space-y-8" ref={ref as any}>
      <div className={`space-y-3 ${isVisible ? "animate-slide-in-left" : "animate-on-scroll"}`}>
        <h2 className="text-3xl md:text-5xl font-bold">Additional Details</h2>
        <div className="h-2 w-24 bg-secondary"></div>
      </div>

      <div className="space-y-6">
        <div
          ref={achievementsRef.ref as any}
          className={`neo-border bg-card p-6 space-y-6 ${
            achievementsRef.isVisible ? "animate-slide-up" : "animate-on-scroll"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold">Achievements</h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-4 border-l-4 border-secondary pl-4">
                <achievement.icon className="h-6 w-6 flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <div className="font-bold text-xs text-secondary">{achievement.type}</div>
                  <h4 className="font-bold text-base md:text-lg">{achievement.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={activitiesRef.ref as any}
          className={`neo-border bg-card p-6 space-y-6 ${
            activitiesRef.isVisible ? "animate-slide-up animate-delay-200" : "animate-on-scroll"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold">Extracurricular Activities</h3>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-4 border-l-4 border-secondary pl-4">
                <activity.icon className="h-6 w-6 flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="font-bold text-base md:text-lg">{activity.organization}</h4>
                  <div className="font-bold text-xs text-secondary">{activity.role}</div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{activity.description}</p>
                  {activity.date && (
                    <span className="inline-block neo-border bg-accent px-2 py-1 text-xs font-bold mt-2">
                      {activity.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
