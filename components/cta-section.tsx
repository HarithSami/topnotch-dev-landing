"use client";

import { motion } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from 'canvas-confetti';

export function CtaSection() {
  // Confetti with firework effect
  const triggerConfettiFirework = () => {
    const end = Date.now() + 800;

    let interval: NodeJS.Timeout;
    interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 30,
        spread: 100,
        origin: { y: 0.6 },
        startVelocity: 30,
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
      });
    }, 50);
  };

  const benefits = [
    "Reduce time-to-hire by 50%",
    "Automate candidate ranking",
    "Eliminate bias with AI",
    "Streamline communication",
    "Integrate with your existing tools",
    "Enterprise-grade security",
  ];


  return (
    <section id="cta" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <motion.h2
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to Automate Your Hiring?
                </motion.h2>

                <motion.p
                  className="text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Join forward-thinking enterprise teams who are finding better talent, faster with CV Studio ENT.
                </motion.p>

                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Button
                    size="lg"
                    className="group"
                    onClick={() => {
                      triggerConfettiFirework(); // your animation function
                      setTimeout(() => {
                        window.location.href = "mailto:enterprisecosales@cvstudio.ai";
                      }, 1000);
                    }}
                  >
                    Request Enterprise Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                </motion.div>
              </div>

              <div className="flex items-center justify-center relative w-full h-full bg-muted/50 p-8">
                <motion.div
                  className="relative z-10 w-full max-w-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Abstract representation of success/hiring */}
                  <div className="relative aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-border flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="text-5xl font-bold text-primary mb-2">98%</div>
                      <div className="text-lg text-muted-foreground">Placement Rate</div>
                      <div className="mt-8 text-sm text-muted-foreground italic">"CV Studio ENT transformed our recruitment process overnight."</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}