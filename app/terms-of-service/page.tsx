import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service - CV Studio',
  description: 'Review the terms and conditions for using CV Studio services.',
};

export default function TermsOfServicePage() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">Last updated: 15 June 2025</p>

      <div className="space-y-6 text-base leading-7">
        <p>
          These Terms of Service ("Terms") govern your access to and use of CV
          Studio ("the Platform"). By using our services, you agree to these
          Terms. If you do not agree, you must discontinue use immediately.
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Use of the Platform</h2>
        <p>
          CV Studio provides AI-powered tools and related services. While we aim
          to deliver accurate and useful results, AI systems may produce errors
          or incomplete information. <strong>You are solely responsible for
          verifying and validating the outputs before relying on them for any
          purpose.</strong>
        </p>

        <h2 className="text-xl font-semibold mt-8">2. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You must use the Platform in compliance with applicable laws and regulations.</li>
          <li>You are responsible for any content you upload, generate, or share through the Platform.</li>
          <li>You agree not to misuse the Platform (e.g., attempting to disrupt services, reverse engineer, or use it for unlawful purposes).</li>
          <li>All reliance on Platform-generated content is at your own risk.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8">3. Data Usage</h2>
        <p>
          We respect your privacy and control over your data. <strong>Your data
          will not be sold or used for training purposes.</strong> We only use
          the data you provide to operate and deliver the services you request.
        </p>

        <h2 className="text-xl font-semibold mt-8">4. Service Availability</h2>
        <p>
          We strive to maintain continuous service but do not guarantee
          uninterrupted access. We may suspend, restrict, or discontinue any part
          of the Platform without liability.
        </p>

        <h2 className="text-xl font-semibold mt-8">5. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, CV Studio is not liable for any
          damages arising from your use of the Platform, including reliance on AI
          outputs, loss of data, or business interruption.
        </p>

        <h2 className="text-xl font-semibold mt-8">6. Modifications</h2>
        <p>
          We may update these Terms from time to time. Updates will be posted on
          this page, and continued use of the Platform constitutes acceptance of
          the revised Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8">7. Contact Us</h2>
        <p>
          For questions about these Terms, please contact us at
          <Link href="mailto:support@cvstudio.ai" className="text-primary underline"> support@cvstudio.ai</Link>.
        </p>
      </div>
    </section>
  );
}
