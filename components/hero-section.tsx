"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Code, Database, Bot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion-wrapper";
import { AnimatedGradientBackground } from "@/components/animated-gradient-background";
import Link from "next/link";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    "Automation",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Full-Stack Solutions"
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      const currentWord = words[currentWordIndex];
      if (typedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setTypedText(currentWord.substring(0, typedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.substring(0, typedText.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentWordIndex]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      <AnimatedGradientBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Next-Gen Software Development</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Engineering the Future with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600 min-h-[1.2em] inline-block">
                {typedText}<span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              TopNotch Dev is a premier software company tailored for the modern enterprise.
              We architect scalable full-stack solutions driven by automation, advanced data science, and cutting-edge AI.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 px-8 text-lg"
                asChild
              >
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-lg bg-background/50 backdrop-blur-sm"
                asChild
              >
                <Link href="#projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-4xl"
          >
            {[
              { icon: Code, label: "Full Stack" },
              { icon: Bot, label: "AI & ML" },
              { icon: Database, label: "Data Science" },
              { icon: Sparkles, label: "Automation" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background/40 backdrop-blur-md border border-white/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-8 w-8" />
                </div>
                <span className="font-medium text-lg">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}