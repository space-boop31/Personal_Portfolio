"use client";

import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="about" className="pt-8 md:pt-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-slide-in-left">
            Arpita Srivastava
          </h1>
          <p className="text-xl md:text-2xl font-bold text-muted-foreground animate-slide-in-left animate-delay-100">
            Software Developer & Full-Stack Engineer
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm md:text-base animate-slide-up animate-delay-200">
          <a
            href="mailto:arpitasrivbusiness@gmail.com"
            className="flex items-center gap-2 neo-border neo-border-hover bg-card px-4 py-3 font-bold"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">
              arpitasrivbusiness@gmail.com
            </span>
            <span className="sm:hidden">Email</span>
          </a>
          <div className="flex items-center gap-2 neo-border bg-secondary px-4 py-3 font-bold">
            <MapPin className="h-4 w-4" />
            <span>Jaipur</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none animate-slide-up animate-delay-300">
          <p className="text-base md:text-lg leading-relaxed text-pretty">
            A passionate software developer with expertise in full-stack
            development, AI/ML, and modern web technologies. Currently pursuing
            B.Tech in Computer Science at VIT Vellore, with hands-on experience
            building scalable applications that serve thousands of users. I
            specialize in creating efficient, user-centric solutions using
            React, Node.js, Python, and cutting-edge AI technologies.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 animate-bounce-in animate-delay-400">
          <Button
            asChild
            className="neo-border neo-border-hover bg-primary text-primary-foreground font-bold"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="neo-border neo-border-hover bg-card font-bold border-2"
          >
            <a
              href="https://github.com/space-boop31"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="neo-border neo-border-hover bg-card font-bold border-2"
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
    </section>
  );
}
