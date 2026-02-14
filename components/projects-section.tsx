"use client";

import { motion } from "@/components/motion-wrapper";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
    const projects = [
        {
            title: "CV Studio",
            description: "A B2C AI-powered platform for crafting tailored, ATS-friendly resumes. Leveraging advanced NLP to optimize job applications for individuals.",
            tags: ["B2C", "Generative AI", "NLP", "React"],
            image: "/images/resumes templates cv studio.png",
            link: "https://cvstudio.ai",
            color: "from-blue-500/20 to-cyan-500/20",
            objectFit: "object-cover"
        },
        {
            title: "CV Studio Enterprise",
            description: "A comprehensive B2B ATS automation ecosystem for enterprises. Features semantic resume parsing, candidate ranking, and secure recruitment workflows.",
            tags: ["B2B", "Enterprise", "Automation", "SaaS"],
            image: "/images/cv-enterprise-screenshot.png",
            link: "https://ats.cvstudio.ai",
            color: "from-purple-500/20 to-pink-500/20",
            objectFit: "object-contain" // Keep contain for dashboard screenshot if it has specific aspect ratio, or user requested "include the screenshot image"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Flagship Projects</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Transforming recruitment with dual-focused solutions for candidates and enterprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-3xl border border-border bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className="relative p-8 h-full flex flex-col">
                                <div className="aspect-video relative w-full mb-8 rounded-2xl overflow-hidden bg-background/50 border border-border/50">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={`${project.objectFit} group-hover:scale-105 transition-transform duration-500`}
                                    />
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-muted-foreground mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
