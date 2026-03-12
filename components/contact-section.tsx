"use client";

import { motion } from "@/components/motion-wrapper";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactModal } from "@/components/contact-modal";

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

                    <div className="flex justify-center">
                        <ContactModal>
                            <Button size="lg" className="h-14 px-8 text-lg">
                                <Mail className="mr-3 h-5 w-5" />
                                Contact Our Team
                            </Button>
                        </ContactModal>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
