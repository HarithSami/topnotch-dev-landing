"use client";

import { motion } from "@/components/motion-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    quote: "CV Studio ENT cut our time-to-hire by 60%. The AI ranking is incredibly accurate and helps us focus on the top 1% of candidates immediately.",
    author: "Jennifer Wu",
    position: "VP of Talent Acquisition, TechCorp",
    avatar: "JW",
  },
  {
    quote: "The ability to build custom pipelines for different engineering roles has been a game changer. It's the most flexible ATS we've ever used.",
    author: "David Miller",
    position: "CTO, Innovate Solutions",
    avatar: "DM",
  },
  {
    quote: "We processed 5,000+ applications last month with zero bottlenecks. The automated email sequences kept every candidate engaged.",
    author: "Sarah Johnson",
    position: "Head of People, GrowthX",
    avatar: "SJ",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Enterprise Leaders
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See how top companies are modernizing their hiring significantly
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="mb-6 text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border border-border">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-primary">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}