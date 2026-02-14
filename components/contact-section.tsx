"use client";

import { motion } from "@/components/motion-wrapper";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-muted/20 relative">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary/5 rounded-3xl p-12 border border-primary/10 shadow-xl"
                >
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 text-primary">
                        <MessageSquare className="h-8 w-8" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Automate Your Future?</h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Whether you need a custom AI solution, a robust ATS platform, or advanced data analytics, TopNotch Dev is your partner in innovation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="h-14 px-8 text-lg" asChild>
                            <Link href="mailto:contact@topnotch.dev">
                                <Mail className="mr-3 h-5 w-5" />
                                Contact Our Team
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background" asChild>
                            <Link href="https://calendly.com/topnotchdev" target="_blank">
                                Schedule a Consultation
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
