"use client";

import { motion } from "@/components/motion-wrapper";
import { Cpu, Database, Network, TrendingUp } from "lucide-react";

export function AboutSection() {
    const features = [
        {
            icon: Cpu,
            title: "Intelligent Automation",
            description: "We build systems that self-optimize, reducing manual overhead and accelerating business processes."
        },
        {
            icon: Database,
            title: "Advanced Data Science",
            description: "Unlock actionable insights from your data with robust analytics and predictive modeling."
        },
        {
            icon: Network,
            title: "Deep Learning & AI",
            description: "Leverage state-of-the-art neural networks and NLP to solve complex, unstructured problems."
        },
        {
            icon: TrendingUp,
            title: "Full-Stack Scalability",
            description: "From cloud infrastructure to responsive frontends, we engineer for performance and growth."
        }
    ];

    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Redefining Enterprise Intelligence</h2>
                        <p className="text-lg text-muted-foreground">
                            At TopNotch Dev, we don't just build software; we engineer intelligence.
                            Our mission is to empower businesses with the tools they need to thrive in an automated, data-driven world.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
