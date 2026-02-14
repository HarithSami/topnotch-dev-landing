"use client";

import { motion } from "@/components/motion-wrapper";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

export function TeamSection() {
    const team = [
        {
            name: "Harith Ibrahim",
            role: "ML & Automation Lead",
            bio: "MEng Robotics, University of Leeds | Ex-Nokia. Architecting our AI automation engine with enterprise-grade expertise.",
            image: "/images/harith_ibrahim.png"
        },
        {
            name: "Harith Al-Safi",
            role: "Full-Stack Development",
            bio: "BEng Computer Engineering, University of Leeds | Ex-BT. Building the scalable, robust infrastructure powering CV Studio.",
            image: "/images/harith_alsafi.png"
        },
        {
            name: "Abdallah AlSafadi",
            role: "Finance & Strategy",
            bio: "MSc Economics & Policy, UCL | Ex-PWC. Driving financial strategy, compliance, and institutional partnerships.",
            image: "/images/Abdallah_AlSafadi.png"
        }
    ];

    return (
        <section id="team" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet the Team</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Driven by innovation, powered by engineering excellence.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative flex flex-col items-center"
                        >
                            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/10 group-hover:border-primary/50 transition-colors shadow-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <p className="text-primary font-medium mb-4">{member.role}</p>
                            <p className="text-center text-muted-foreground max-w-sm mb-6 leading-relaxed">
                                {member.bio}
                            </p>

                            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors">
                                    <Twitter className="h-5 w-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
