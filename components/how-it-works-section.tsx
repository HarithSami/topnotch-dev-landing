"use client";

import { motion } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { GitBranch, Database, Sparkles, UserCheck, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: <GitBranch className="h-8 w-8" />,
      title: "Design Your Pipeline",
      description: "Create custom hiring workflows with our drag-and-drop editor to match your specific role requirements."
    },
    {
      number: "02",
      icon: <Database className="h-8 w-8" />,
      title: "Source Candidates",
      description: "Import candidates from job boards or your existing database using our bulk parsing tools."
    },
    {
      number: "03",
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI Auto-Screening",
      description: "Our AI automatically ranks every applicant based on semantic match to the job description."
    },
    {
      number: "04",
      icon: <UserCheck className="h-8 w-8" />,
      title: "Hire the Best",
      description: "Collaborate with your team to interview top-ranked talent and extend offers faster."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Streamlined Hiring Workflow
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            From job posting to offer letter, we automate the heavy lifting.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary mb-2 line-clamp-1">STEP {step.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-8 w-0.5 h-24 bg-border/50 -z-10 bg-gradient-to-b from-primary/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="group"
              onClick={() => {
                window.location.href = "mailto:enterprisecosales@cvstudio.ai";
              }}
            >
              See Workflow in Action
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>


          </motion.div>
        </div>
      </div>
    </section>
  );
}