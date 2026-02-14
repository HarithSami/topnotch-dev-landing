"use client";

import { motion } from "@/components/motion-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Search, GitPullRequest, FileCheck, Mail, Globe, BrainCircuit, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-10 w-10 text-purple-500" />,
    title: "AI Auto-Ranking",
    description: "Instantly identify top talent. Our AI scores and ranks every applicant against your job requirements."
  },
  {
    icon: <Search className="h-10 w-10 text-blue-500" />,
    title: "Semantic Search",
    description: "Search your entire candidate database using natural language queries like 'Senior React Dev with FinTech experience'."
  },
  {
    icon: <GitPullRequest className="h-10 w-10 text-emerald-500" />,
    title: "Custom Pipelines",
    description: "Design bespoke hiring workflows with drag-and-drop ease. Automate stage transitions and actions."
  },
  {
    icon: <FileCheck className="h-10 w-10 text-amber-500" />,
    title: "Exam Creation",
    description: "Generate technical assessments and behavioral quizzes automatically to validate candidate skills."
  },
  {
    icon: <Mail className="h-10 w-10 text-rose-500" />,
    title: "Automated Emails",
    description: "Engage candidates at scale with personalized, automated email sequences and interview scheduling."
  },
  {
    icon: <Globe className="h-10 w-10 text-cyan-500" />,
    title: "Career Portals",
    description: "Launch stunning, branded career pages that integrate seamlessly with your ATS to capture more applicants."
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-indigo-500" />,
    title: "Smart Parsing",
    description: "Extract structured data from any resume format (PDF, DOCX) in milliseconds with 99% accuracy."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-orange-500" />,
    title: "Hiring Analytics",
    description: "Visualize your entire funnel. Track time-to-hire, source quality, and diverse hiring metrics."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Recruitment <span className="text-primary">Automation</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to source, screen, and hire the world's best talent at scale.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-2 rounded-lg bg-background w-fit border border-border/50">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}