"use client";

import { motion } from "@/components/motion-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI ranking algorithm work?",
    answer: "Our proprietary AI analyzes candidate profiles against your specific job descriptions, taking into account skills, experience, and semantic context. It assigns a match score to help recruiters prioritize the most promising candidates instantly, reducing screening time by up to 80%."
  },
  {
    question: "Can we integrate CV Studio ENT with our existing HRIS?",
    answer: "Yes, CV Studio ENT offers seamless bidirectional integration with major HRIS and payroll systems including Workday, BambooHR, and SAP SuccessFactors. Our API allows for custom integrations as needed."
  },
  {
    question: "Is candidate data secure and GDPR compliant?",
    answer: "Absolutely. We are SOC 2 Type II certified and fully GDPR compliant. All data is encrypted at rest and in transit, ensuring your organization and your candidates remain protected at the highest enterprise standards."
  },
  {
    question: "How customizable are the hiring pipelines?",
    answer: "Fully customizable. You can build bespoke workflows for different roles or departments using our drag-and-drop editor. Add stages for assessments, interviews, and automated email triggers to match your internal processes perfectly."
  },
  {
    question: "Does the platform support blind hiring?",
    answer: "Yes, our 'Bias-Free Mode' can anonymize candidate profiles during the initial screening process, hiding names, photos, and other demographic data to ensure hiring decisions are based purely on skills and merit."
  },
  {
    question: "What kind of support is included with the Enterprise plan?",
    answer: "Enterprise clients receive a dedicated Customer Success Manager, 24/7 priority support, and tailored onboarding sessions to ensure your team captures value from day one."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about the platform
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}