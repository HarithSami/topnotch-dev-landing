'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Shield,
  FileText,
  Mail,
  Linkedin,
  Database,
  UserCheck,
  Lock,
  Globe,
  ChevronDown,
  ArrowLeft,
} from 'lucide-react';

const sections = [
  {
    id: 'overview',
    icon: Shield,
    title: 'Overview',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'data-we-collect',
    icon: Database,
    title: 'Data We Collect',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'resume-processing',
    icon: FileText,
    title: 'Resume Processing & Applicant Ranking',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'email-communications',
    icon: Mail,
    title: 'Email Communications',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'linkedin-integration',
    icon: Linkedin,
    title: 'LinkedIn Integration',
    color: 'from-sky-500 to-indigo-500',
  },
  {
    id: 'data-usage',
    icon: UserCheck,
    title: 'How We Use Your Data',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'data-retention',
    icon: Lock,
    title: 'Data Retention & Security',
    color: 'from-fuchsia-500 to-violet-500',
  },
  {
    id: 'your-rights',
    icon: Globe,
    title: 'Your Rights',
    color: 'from-green-500 to-emerald-500',
  },
];

function SectionAnchor({ id }: { id: string }) {
  return <div id={id} className="-mt-24 pt-24 absolute" />;
}

function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-medium hover:bg-muted/50 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-7">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(s.id);
          }
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner - theme-adaptive: violet tint in light, deep violet in dark */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-100 via-background to-background dark:from-violet-950 dark:via-background dark:to-background border-b border-border">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-400 dark:bg-violet-600 rounded-full blur-3xl opacity-15 dark:opacity-25" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-400 dark:bg-purple-600 rounded-full blur-3xl opacity-10 dark:opacity-20" />
        </div>
        <div className="container mx-auto px-4 py-20 relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
              <Shield className="h-7 w-7 text-violet-500 dark:text-violet-400" />
            </div>
            <span className="text-sm font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              Legal
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl leading-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-6">
            CV Studio is committed to protecting your privacy. This policy
            describes exactly how we collect, use, and safeguard your personal
            data across all our services: resume parsing, applicant ranking,
            email communications, and LinkedIn integrations.
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Last updated:</span>{' '}
            26 February 2026 &nbsp;&middot;&nbsp;{' '}
            <span className="font-medium text-foreground">Effective:</span>{' '}
            26 February 2026
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Table of Contents */}
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-28 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4 px-2">
                On this page
              </p>
              {sections.map((s) => {
                const Icon = s.icon;
                const isActive = activeSection === s.id;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group ${
                      isActive
                        ? 'bg-violet-500/10 text-foreground font-medium border border-violet-500/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-md bg-gradient-to-br ${s.color} transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="leading-snug">{s.title}</span>
                    {isActive && (
                      <div className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-500 shrink-0" />
                    )}
                  </a>
                );
              })}
              <div className="mt-8 p-4 rounded-xl border border-border bg-muted/30">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Questions about this policy?{' '}
                  <Link
                    href="mailto:privacy@topnotch-dev.com"
                    className="text-violet-400 hover:underline"
                  >
                    privacy@topnotch-dev.com
                  </Link>
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-16">
            {/* Overview */}
            <section className="relative">
              <SectionAnchor id="overview" />
              <SectionHeader
                icon={Shield}
                color="from-violet-500 to-purple-600"
                title="Overview"
              />
              <div className="prose-content space-y-4 text-muted-foreground leading-7">
                <p>
                  CV Studio (&quot;we&quot;, &quot;our&quot;, or &quot;the
                  Platform&quot;) is a business-to-consumer (B2C) AI-powered
                  Applicant Tracking System (ATS) offered as a Software-as-a-Service
                  (SaaS). Our platform helps recruiters and hiring managers
                  streamline the entire hiring lifecycle: from posting jobs on
                  LinkedIn, to parsing resumes, ranking applicants, and managing
                  candidate communications.
                </p>
                <p>
                  This Privacy Policy applies to all users of the CV Studio
                  platform and explains how we handle personal data for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Recruiters and hiring teams (our paying customers)</li>
                  <li>
                    Job applicants whose data is processed through the platform
                  </li>
                  <li>Users who connect LinkedIn accounts to the platform</li>
                </ul>
                <p>
                  We comply with applicable data protection regulations
                  including the GDPR (EU/EEA), UK GDPR, CCPA, and other
                  applicable privacy laws.
                </p>
              </div>
            </section>

            {/* Data We Collect */}
            <section className="relative">
              <SectionAnchor id="data-we-collect" />
              <SectionHeader
                icon={Database}
                color="from-blue-500 to-cyan-500"
                title="Data We Collect"
              />
              <div className="space-y-4 text-muted-foreground leading-7">
                <p>
                  We collect data across three categories of individuals who
                  interact with our platform:
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <DataCard
                    title="Recruiter / Company Data"
                    items={[
                      'Name & email address',
                      'Company name & billing details',
                      'Job descriptions & requirements',
                      'Platform usage & activity logs',
                      'OAuth tokens (LinkedIn, email)',
                    ]}
                    gradient="from-blue-500/10 to-cyan-500/10 border-blue-500/20"
                  />
                  <DataCard
                    title="Applicant Data"
                    items={[
                      'Name, email, phone number',
                      'Resume content (CV files)',
                      'Work history & skills',
                      'Assessment responses',
                      'Email replies & communication history',
                    ]}
                    gradient="from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
                  />
                  <DataCard
                    title="Platform-Generated Data"
                    items={[
                      'Applicant ranking scores',
                      'AI-parsed resume attributes',
                      'Interview slots & schedules',
                      'Email delivery metadata',
                      'LinkedIn post & application data',
                    ]}
                    gradient="from-violet-500/10 to-purple-500/10 border-violet-500/20"
                  />
                </div>

                <InfoBox type="important">
                  <strong>No sensitive categories without consent.</strong> We
                  do not intentionally collect sensitive personal data such as
                  racial or ethnic origin, health information, political
                  opinions, or biometric data. If a candidate voluntarily
                  includes such information in their resume, it is processed
                  only to provide the service and never used for discriminatory
                  ranking.
                </InfoBox>
              </div>
            </section>

            {/* Resume Processing & Applicant Ranking */}
            <section className="relative">
              <SectionAnchor id="resume-processing" />
              <SectionHeader
                icon={FileText}
                color="from-emerald-500 to-teal-500"
                title="Resume Processing & Applicant Ranking"
              />
              <div className="space-y-4 text-muted-foreground leading-7">
                <p>
                  A core function of CV Studio is the automated parsing of
                  resumes and the AI-driven ranking of candidates against a job
                  description. Here is exactly how we handle this:
                </p>

                <div className="space-y-3">
                  <AccordionItem title="How resume parsing works">
                    <p className="mb-3">
                      When a recruiter uploads or receives a candidate&apos;s
                      resume, our systems automatically extract structured
                      information including:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Contact details (name, email, phone)</li>
                      <li>Work experience, titles, and dates</li>
                      <li>Education background and qualifications</li>
                      <li>Skills, certifications, and languages</li>
                      <li>Projects and portfolio links</li>
                    </ul>
                    <p className="mt-3">
                      This parsed data is stored securely and associated with
                      the specific job application.
                    </p>
                  </AccordionItem>

                  <AccordionItem title="How applicant ranking works">
                    <p className="mb-3">
                      Our AI engine compares parsed resume attributes against
                      criteria defined by the recruiter in the job description.
                      A relevance score is generated for each applicant. This
                      score is:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        Based <strong>only</strong> on job-relevant factors
                        (skills, experience, education match)
                      </li>
                      <li>
                        Never based on protected characteristics (race, gender,
                        age, disability, etc.)
                      </li>
                      <li>Always presented to recruiters as a decision-aid, not a final decision</li>
                      <li>Subject to human review before any hiring decisions are made</li>
                    </ul>
                  </AccordionItem>

                  <AccordionItem title="Applicant consent & transparency">
                    <p>
                      Applicants are informed (via the job posting or application
                      flow) that their resume will be processed by an automated
                      system. Recruiters using CV Studio are obligated (under our
                      Terms of Service) to ensure their candidates have been
                      appropriately informed about automated processing and have
                      provided consent where required by local law (e.g., GDPR
                      Article 22).
                    </p>
                  </AccordionItem>

                  <AccordionItem title="Use of resume data to improve our AI models">
                    <p className="mb-3">
                      We may use anonymised and aggregated resume data to train,
                      evaluate, and improve the accuracy of our AI parsing and
                      ranking models. The purpose of this is solely to deliver
                      better results for all users of the platform (for example,
                      improving how accurately we extract skills or match
                      candidates to job descriptions).
                    </p>
                    <ul className="list-disc list-inside space-y-1 mb-3">
                      <li>Data used for model improvement is <strong>de-identified</strong> before use wherever possible.</li>
                      <li>We do <strong>not</strong> share raw resume data with third parties for AI training purposes.</li>
                      <li>We do <strong>not</strong> sell resume data to any external AI or data broker.</li>
                      <li>Sensitive personal details (contact info, national ID numbers, etc.) are excluded from training datasets.</li>
                    </ul>
                    <p>
                      If you are a candidate and do not wish your resume data to
                      be used for model improvement, you may opt out at any time
                      by contacting us at{' '}
                      <Link
                        href="mailto:privacy@topnotch-dev.com"
                        className="text-emerald-400 hover:underline"
                      >
                        privacy@topnotch-dev.com
                      </Link>
                      . We will honour your request and remove your data from
                      any training pipeline within 30 days.
                    </p>
                  </AccordionItem>
                </div>
              </div>
            </section>

            {/* Email Communications */}
            <section className="relative">
              <SectionAnchor id="email-communications" />
              <SectionHeader
                icon={Mail}
                color="from-orange-500 to-amber-500"
                title="Email Communications"
              />
              <div className="space-y-4 text-muted-foreground leading-7">
                <p>
                  CV Studio sends and receives emails on behalf of recruiters
                  as part of the hiring workflow. This covers assessment
                  invitations, interview scheduling, and general candidate
                  communications.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                  <FeatureCard
                    title="Emails We Send"
                    gradient="from-orange-500/10 to-amber-500/10 border-orange-500/20"
                    items={[
                      { label: 'Assessment invitations', desc: 'Sent to candidates inviting them to complete skills or role-specific assessments.' },
                      { label: 'Interview scheduling', desc: 'Automated emails to candidates with calendar links or proposed interview slots.' },
                      { label: 'Status updates', desc: 'Optional notifications informing candidates of their application status.' },
                      { label: 'Follow-ups', desc: 'Reminder emails for pending assessments or unconfirmed interviews.' },
                    ]}
                  />
                  <FeatureCard
                    title="Emails We Receive & Process"
                    gradient="from-yellow-500/10 to-orange-500/10 border-yellow-500/20"
                    items={[
                      { label: 'Assessment replies', desc: 'Candidate responses to assessment tasks submitted via email.' },
                      { label: 'Interview confirmations/rejections', desc: 'Replies accepting or declining proposed interview times.' },
                      { label: 'Candidate queries', desc: 'General replies from candidates, which are surfaced to recruiters.' },
                    ]}
                  />
                </div>

                <div className="space-y-3 mt-2">
                  <AccordionItem title="How email content is handled">
                    <p>
                      Incoming email replies are parsed to extract relevant
                      information (e.g., the candidate&apos;s preferred interview
                      slot, assessment answers). This content is stored in the
                      candidate profile within the platform and is accessible
                      only to authorised recruiters on the hiring team.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Email infrastructure and third-party providers">
                    <p>
                      We use industry-standard transactional email providers
                      (such as SendGrid or similar) to deliver emails. These
                      providers may process email metadata (sender, recipient,
                      timestamps) but are bound by strict data processing
                      agreements and do not have rights to use email content for
                      their own purposes.
                    </p>
                  </AccordionItem>
                  <AccordionItem title="Unsubscribing and opting out">
                    <p>
                      Every automated email sent to a candidate includes an
                      opt-out mechanism. Candidates can reply &apos;STOP&apos; or use the
                      unsubscribe link to cease receiving communications from a
                      particular recruiter&apos;s campaign. Recruiters also have the
                      ability to suppress candidates from communication lists
                      within the platform.
                    </p>
                  </AccordionItem>
                </div>

                <InfoBox type="note">
                  Emails sent through CV Studio are sent on behalf of the
                  recruiter (your employer or client). CV Studio acts as a data
                  processor, not a data controller, for this email activity. The
                  recruiter/company is responsible for ensuring they have a lawful
                  basis for contacting candidates.
                </InfoBox>
              </div>
            </section>

            {/* LinkedIn Integration */}
            <section className="relative">
              <SectionAnchor id="linkedin-integration" />
              <SectionHeader
                icon={Linkedin}
                color="from-sky-500 to-indigo-500"
                title="LinkedIn Integration"
              />
              <div className="space-y-4 text-muted-foreground leading-7">
                <p>
                  CV Studio integrates with LinkedIn to allow recruiters to
                  post job openings and receive applications directly within
                  the platform. We access LinkedIn data strictly in accordance
                  with LinkedIn&apos;s API Terms of Use and the Digital Markets Act
                  (DMA) where applicable.
                </p>

                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-sky-500/10 px-5 py-3 border-b border-border">
                    <h3 className="font-semibold text-sm text-sky-400">
                      LinkedIn Data We Access & Why
                    </h3>
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      {
                        action: 'Job Posting',
                        data: 'Job title, description, location, and requirements',
                        purpose: 'To publish job listings on LinkedIn on behalf of the recruiter',
                      },
                      {
                        action: 'Receiving Applications',
                        data: 'Applicant LinkedIn profile (name, headline, experience, skills)',
                        purpose: 'To import candidate profiles into CV Studio for review and ranking',
                      },
                      {
                        action: 'DMA Portability Data',
                        data: 'Profile and employment data shared via LinkedIn DMA Portability APIs',
                        purpose: 'Only accessed with explicit member consent, solely to deliver the requested features',
                      },
                      {
                        action: 'OAuth Access Token',
                        data: 'LinkedIn OAuth token scoped to posting and application access',
                        purpose: "To authenticate API calls on behalf of the recruiter's account",
                      },
                    ].map((row) => (
                      <div key={row.action} className="grid sm:grid-cols-3 gap-2 px-5 py-4 text-sm">
                        <div className="font-medium text-foreground">{row.action}</div>
                        <div className="text-muted-foreground">{row.data}</div>
                        <div className="text-muted-foreground">{row.purpose}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 mt-2">
                  <AccordionItem title="LinkedIn DMA Portability Data compliance">
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Member Consent:</strong> We only access LinkedIn Portability Data with explicit member consent for the specific feature authorised.</li>
                      <li><strong>Purpose Limitation:</strong> LinkedIn Portability Data is never used for advertising, profiling, AI/ML training, or sold to third parties.</li>
                      <li><strong>Data Deletion:</strong> You may request deletion of your LinkedIn Portability Data at any time by contacting <Link href="mailto:privacy@topnotch-dev.com" className="text-sky-400 hover:underline">privacy@topnotch-dev.com</Link>. We will comply unless retention is required by law.</li>
                      <li><strong>No Re-Identification:</strong> We do not attempt to re-identify anonymised or de-identified LinkedIn data.</li>
                      <li><strong>No Discriminatory Use:</strong> LinkedIn data is never used in ways that facilitate bias or unlawful discrimination.</li>
                      <li><strong>Third-Party Disclosure:</strong> LinkedIn data is not disclosed to third parties except to trusted processors under strict confidentiality obligations and only to deliver the platform services.</li>
                    </ul>
                  </AccordionItem>
                  <AccordionItem title="Revoking LinkedIn access">
                    <p>
                      You can revoke CV Studio&apos;s access to your LinkedIn account
                      at any time via LinkedIn&apos;s &quot;Authorised Apps&quot; settings page
                      or by disconnecting the integration from within CV Studio.
                      Revoking access will stop any future LinkedIn data
                      synchronisation but will not automatically delete data
                      previously imported.
                    </p>
                  </AccordionItem>
                </div>
              </div>
            </section>

            {/* How We Use Your Data */}
            <section className="relative">
              <SectionAnchor id="data-usage" />
              <SectionHeader
                icon={UserCheck}
                color="from-pink-500 to-rose-500"
                title="How We Use Your Data"
              />
              <div className="space-y-4 text-muted-foreground leading-7">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Purpose</th>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Data Used</th>
                      <th className="text-left py-3 font-semibold text-foreground">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { purpose: 'Resume parsing & ranking', data: 'Resume content, job criteria', basis: 'Contract / Legitimate interests' },
                      { purpose: 'Sending assessment emails', data: 'Candidate email, assessment content', basis: 'Contract / Legitimate interests' },
                      { purpose: 'Receiving & processing replies', data: 'Inbound email content', basis: 'Contract / Legitimate interests' },
                      { purpose: 'Interview scheduling', data: 'Candidate email, availability', basis: 'Contract' },
                      { purpose: 'LinkedIn job posting', data: 'Job description, recruiter OAuth', basis: 'Contract' },
                      { purpose: 'Importing LinkedIn applications', data: 'Applicant LinkedIn profile', basis: 'Consent (via LinkedIn)' },
                      { purpose: 'AI model improvement (opt-out available)', data: 'Anonymised resume data', basis: 'Legitimate interests' },
                      { purpose: 'Platform analytics & improvement', data: 'Aggregated, anonymised usage data', basis: 'Legitimate interests' },
                      { purpose: 'Billing & account management', data: 'Payment details, account info', basis: 'Contract' },
                      { purpose: 'Security & fraud prevention', data: 'Login, activity logs', basis: 'Legitimate interests' },
                    ].map((row) => (
                      <tr key={row.purpose}>
                        <td className="py-3 pr-4">{row.purpose}</td>
                        <td className="py-3 pr-4 text-muted-foreground/80">{row.data}</td>
                        <td className="py-3">
                          <span className="text-xs bg-muted px-2 py-1 rounded-full">{row.basis}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <InfoBox type="important">
                  <strong>We never sell your data.</strong> We never sell,
                  license, or otherwise monetise personal data belonging to
                  recruiters, applicants, or LinkedIn members. Data is used
                  exclusively to deliver and improve the CV Studio service.
                </InfoBox>
              </div>
            </section>

            {/* Data Retention & Security */}
            <section className="relative">
              <SectionAnchor id="data-retention" />
              <SectionHeader
                icon={Lock}
                color="from-fuchsia-500 to-violet-500"
                title="Data Retention & Security"
              />
              <div className="space-y-4 text-muted-foreground leading-7">
                <p>
                  We retain personal data only for as long as necessary to
                  deliver our services or as required by applicable law.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Active account data', period: 'Duration of subscription + 90 days post-cancellation' },
                    { label: 'Applicant profiles', period: 'As specified by recruiter, max 2 years unless extended' },
                    { label: 'Email content & replies', period: '12 months from last activity' },
                    { label: 'LinkedIn Portability Data', period: 'Until user requests deletion or connection is revoked' },
                    { label: 'Billing records', period: '7 years (legal/tax compliance)' },
                    { label: 'Security & audit logs', period: '12 months' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex gap-3 p-4 rounded-lg border border-border bg-muted/20"
                    >
                      <div className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-fuchsia-500/20 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-fuchsia-500" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.period}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-base font-semibold text-foreground mt-6">Security Measures</h3>
                <p>
                  We implement industry-standard technical and organisational
                  measures to protect your data, including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Encryption in transit (TLS 1.2+) and at rest (AES-256)</li>
                  <li>Role-based access controls limiting who can view applicant data</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Secure OAuth token storage with encrypted vaults</li>
                  <li>Automated threat detection and anomaly monitoring</li>
                </ul>
                <p>
                  While we take every reasonable precaution, no system is
                  completely immune to breaches. In the event of a data breach
                  that affects your rights, we will notify you and relevant
                  supervisory authorities within 72 hours as required by GDPR.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="relative">
              <SectionAnchor id="your-rights" />
              <SectionHeader
                icon={Globe}
                color="from-green-500 to-emerald-500"
                title="Your Rights"
              />
              <div className="space-y-4 text-muted-foreground leading-7">
                <p>
                  Depending on your location, you may have the following rights
                  regarding your personal data. To exercise any of these rights,
                  contact us at{' '}
                  <Link
                    href="mailto:privacy@topnotch-dev.com"
                    className="text-emerald-400 hover:underline"
                  >
                    privacy@topnotch-dev.com
                  </Link>
                  .
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { right: 'Right of Access', desc: 'Request a copy of the personal data we hold about you.' },
                    { right: 'Right to Rectification', desc: 'Ask us to correct inaccurate or incomplete data.' },
                    { right: 'Right to Erasure', desc: 'Request deletion of your personal data ("right to be forgotten").' },
                    { right: 'Right to Restrict Processing', desc: 'Ask us to limit how we use your data in certain circumstances.' },
                    { right: 'Right to Data Portability', desc: 'Receive your data in a structured, machine-readable format.' },
                    { right: 'Right to Object', desc: 'Object to processing based on legitimate interests or for direct marketing.' },
                    { right: 'Right to Withdraw Consent', desc: 'Withdraw consent at any time without affecting prior processing.' },
                    { right: 'Right Not to be Subject to Automated Decisions', desc: 'Request human review of any solely automated decisions that significantly affect you.' },
                  ].map((item) => (
                    <div
                      key={item.right}
                      className="p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <p className="font-semibold text-sm text-foreground mb-1">{item.right}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm">
                  We will respond to all valid requests within{' '}
                  <strong className="text-foreground">30 days</strong>. If you
                  are unsatisfied with our response, you have the right to lodge
                  a complaint with your local data protection authority (e.g.,
                  the ICO in the UK, or your national DPA in the EU).
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="rounded-2xl border border-border bg-gradient-to-br from-violet-500/5 to-purple-500/5 p-8">
              <h2 className="text-xl font-bold mb-3">Contact & Data Controller</h2>
              <p className="text-muted-foreground text-sm leading-7 mb-6">
                CV Studio is operated by{' '}
                <strong className="text-foreground">TopNotch Dev Ltd</strong>.
                For any privacy-related enquiries, data subject requests, or
                concerns about this policy, please reach out to us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:privacy@topnotch-dev.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  privacy@topnotch-dev.com
                </Link>
                <Link
                  href="/terms-of-service"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-muted text-sm font-medium transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Terms of Service
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                This Privacy Policy may be updated from time to time. We will
                notify registered users of material changes by email. The
                &quot;Last updated&quot; date at the top of this page reflects the
                most recent revision.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

// Helper Components

function SectionHeader({
  icon: Icon,
  color,
  title,
}: {
  icon: React.ElementType;
  color: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-2 rounded-xl bg-gradient-to-br ${color} shadow-sm`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
  );
}

function DataCard({
  title,
  items,
  gradient,
}: {
  title: string;
  items: string[];
  gradient: string;
}) {
  return (
    <div className={`rounded-xl border bg-gradient-to-br ${gradient} p-5`}>
      <h3 className="font-semibold text-sm text-foreground mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-current shrink-0 opacity-60" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({
  title,
  items,
  gradient,
}: {
  title: string;
  items: { label: string; desc: string }[];
  gradient: string;
}) {
  return (
    <div className={`rounded-xl border bg-gradient-to-br ${gradient} p-5`}>
      <h3 className="font-semibold text-sm text-foreground mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-xs font-medium text-foreground">{item.label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoBox({
  type,
  children,
}: {
  type: 'note' | 'important';
  children: React.ReactNode;
}) {
  const styles =
    type === 'important'
      ? 'border-amber-500/40 bg-amber-500/10 text-amber-800 dark:text-amber-200'
      : 'border-sky-500/40 bg-sky-500/10 text-sky-800 dark:text-sky-200';

  return (
    <div className={`rounded-xl border ${styles} px-5 py-4 text-sm leading-7 mt-4`}>
      {children}
    </div>
  );
}