"use client";

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const cardRef = useScrollAnimation(0.1);

  return (
    <section id="contact" className="space-y-8" ref={ref as any}>
      <div
        className={`space-y-3 ${
          isVisible ? "animate-slide-in-left" : "animate-on-scroll"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
        <div className="h-2 w-24 bg-secondary"></div>
      </div>

      <div
        ref={cardRef.ref as any}
        className={`neo-border bg-card p-8 md:p-12 ${
          cardRef.isVisible ? "animate-scale-in" : "animate-on-scroll"
        }`}
      >
        <div className="max-w-2xl space-y-8">
          <p className="text-lg md:text-xl leading-relaxed text-balance">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's build something
            amazing together!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:arpitasrivbusiness@gmail.com"
              className="flex items-center gap-4 p-4 neo-border neo-border-hover bg-background font-bold group"
            >
              <div className="bg-secondary p-3 border-2 border-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm md:text-base">
                  arpitasrivbusiness@gmail.com
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 neo-border bg-background font-bold">
              <div className="bg-secondary p-3 border-2 border-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="text-sm md:text-base">Jaipur, India</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              asChild
              className="neo-border neo-border-hover bg-primary text-primary-foreground font-bold"
            >
              <a
                href="hhttps://github.com/space-boop31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              className="neo-border neo-border-hover bg-primary text-primary-foreground font-bold"
            >
              <a
                href="https://www.linkedin.com/in/arpita--srivastava/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
