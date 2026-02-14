"use client";

import { motion } from "@/components/motion-wrapper";
import Image from "next/image";

export function ClientsSection() {
    const clients = [
        {
            name: "Nokia",
            light: "/images/logos-success-stories/nokia.png",
            dark: "/images/logos-success-stories/nokia -dark.png",
            width: 120,
            height: 40
        },
        {
            name: "BT",
            light: "/images/logos-success-stories/bt.png",
            dark: "/images/logos-success-stories/bt - dark.png",
            width: 50,
            height: 40
        },
        {
            name: "Bosch",
            light: "/images/logos-success-stories/bosch.png",
            dark: "/images/logos-success-stories/bosch - dark.png",
            width: 60,
            height: 40
        },
        {
            name: "Caterpillar",
            light: "/images/logos-success-stories/cat.png",
            dark: "/images/logos-success-stories/cat - dark.png",
            width: 80,
            height: 40
        },
        {
            name: "Electronic Arts",
            light: "/images/logos-success-stories/ea.png",
            dark: "/images/logos-success-stories/ea - dark.png",
            width: 80,
            height: 40
        }
    ];

    return (
        <section className="py-12 border-y border-border/50 bg-muted/5">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
                    Trusted by Leaders & Built by Alumni From
                </p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative h-10 w-32 md:w-40 flex items-center justify-center"
                        >
                            <Image
                                src={client.light}
                                alt={`${client.name} logo`}
                                width={client.width}
                                height={client.height}
                                className="object-contain dark:hidden"
                            />
                            <Image
                                src={client.dark}
                                alt={`${client.name} logo`}
                                width={client.width}
                                height={client.height}
                                className="object-contain hidden dark:block"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
