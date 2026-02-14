import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - CV Studio',
  description: 'Learn how CV Studio collects, uses, and protects your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last updated: 15 June 2025</p>

      <div className="space-y-6 text-base leading-7">
        <p>
          CV Studio is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
        </p>

        <h2 className="text-xl font-semibold mt-8">LinkedIn Member Data Portability</h2>
        <p>
          If you choose to connect your LinkedIn account to CV Studio, we may access certain information from your LinkedIn profile using the LinkedIn DMA Portability APIs ("Portability Data"). This is subject to the following principles:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Member Consent:</strong> We only access and process your LinkedIn Portability Data with your explicit consent and solely for the purpose of providing the features you authorize.</li>
          <li><strong>Purpose Limitation:</strong> We do not use LinkedIn Portability Data for advertising, profiling, training AI/ML models, or any purpose other than to provide the services you request. We do not sell, trade, or otherwise monetize your LinkedIn Portability Data.</li>
          <li><strong>Data Storage and Deletion:</strong> Your LinkedIn Portability Data is stored only as long as necessary to provide our services or as required by law. You may request deletion of your LinkedIn Portability Data at any time by contacting us, and we will promptly comply unless retention is required by law.</li>
          <li><strong>No Re-Identification or Discriminatory Use:</strong> We do not attempt to re-identify anonymized or de-identified data, nor do we use LinkedIn Portability Data in any way that facilitates bias or discrimination.</li>
          <li><strong>Security:</strong> We use administrative, technical, and physical safeguards to protect your LinkedIn Portability Data.</li>
          <li><strong>Third-Party Disclosure:</strong> We do not disclose your LinkedIn Portability Data to third parties except to trusted service providers who assist us in operating our services, under strict confidentiality obligations.</li>
          <li><strong>Compliance:</strong> Our handling of LinkedIn Portability Data complies with the LinkedIn API Terms of Use, the DMA, and all applicable privacy laws.</li>
        </ul>
        <p>
          If you have questions about how we handle LinkedIn Portability Data, or wish to exercise your rights regarding this data, please contact us at <Link href="mailto:privacy@cvstudio.ai" className="text-primary underline">privacy@cvstudio.ai</Link>.
        </p>

        <h2 className="text-xl font-semibold mt-8">1. Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us when you register on the website, use the service, or communicate with us. This may include your name, email address, resume content, payment details, and any other information you choose to provide.
        </p>

        <h2 className="text-xl font-semibold mt-8">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide, operate, and maintain our services.</li>
          <li>Improve, personalize, and expand our services.</li>
          <li>Understand and analyze how you use our services.</li>
          <li>Develop new products, services, features, and functionality.</li>
          <li>Process your transactions and manage your orders.</li>
          <li>Communicate with you, either directly or through one of our partners.</li>
          <li>Send you emails, including newsletters and promotional materials.</li>
          <li>Find and prevent fraud.</li>
        </ul>
        <p>
          Importantly, <strong>we do not use your personal information or uploaded content for training artificial intelligence or machine learning models, nor do we sell or license your data for such purposes.</strong>
        </p>

        <h2 className="text-xl font-semibold mt-8">3. Sharing Your Information</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential and do not use it for training purposes.
        </p>

        <h2 className="text-xl font-semibold mt-8">4. Security</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
        </p>

        <h2 className="text-xl font-semibold mt-8">5. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal data, such as the right to access, correct, or delete the information we hold about you. To exercise these rights, please contact us at <Link href="mailto:support@cvstudio.ai" className="text-primary underline">support@cvstudio.ai</Link>.
        </p>

        <h2 className="text-xl font-semibold mt-8">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-xl font-semibold mt-8">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:support@cvstudio.ai" className="text-primary underline">support@cvstudio.ai</Link>.
        </p>
      </div>
    </section>
  );
}