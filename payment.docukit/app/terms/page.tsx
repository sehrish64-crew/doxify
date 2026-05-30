import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms and conditions governing the use of Doxsify services.',
};

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        {title}
      </h2>
      <div className="text-slate-600 dark:text-slate-400 space-y-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-slate-600 dark:[&_li]:text-slate-400">
        {children}
      </div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Last updated: May 30, 2026</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto">
            <LegalSection title="1. Acceptance of Terms">
              <p>
                By accessing or using Doxsify (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service. We reserve the right to update these terms at any time with notice.
              </p>
            </LegalSection>

            <LegalSection title="2. Description of Service">
              <p>
                Doxsify provides web-based document and image processing tools including but not limited to PDF conversion, merging, splitting, compression, rotation, password protection, and image format conversion.
              </p>
            </LegalSection>

            <LegalSection title="3. User Responsibilities">
              <p>You agree that you will:</p>
              <ul>
                <li>Only upload files you own or have legal rights to process</li>
                <li>Not use the service for illegal, harmful, or unauthorized purposes</li>
                <li>Not attempt to reverse engineer, hack, or disrupt our service</li>
                <li>Not upload files containing malware, viruses, or malicious code</li>
                <li>Comply with all applicable laws in your jurisdiction</li>
              </ul>
            </LegalSection>

            <LegalSection title="4. Intellectual Property">
              <p>
                You retain all intellectual property rights in the files you upload. By using our service, you grant Doxsify a limited, non-exclusive license to process your files solely for the purpose of providing the requested service. This license expires when your files are deleted.
              </p>
            </LegalSection>

            <LegalSection title="5. Subscriptions and Payments">
              <p>
                Paid subscriptions are billed in advance on a monthly or annual basis. Payments are processed by Paddle.com, our Merchant of Record. By subscribing, you authorize recurring charges until you cancel. All prices are in USD unless otherwise stated.
              </p>
            </LegalSection>

            <LegalSection title="6. Cancellation">
              <p>
                You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. You will retain access to paid features until the end of the period. No partial refunds are provided for unused time except as stated in our Refund Policy.
              </p>
            </LegalSection>

            <LegalSection title="7. Limitation of Liability">
              <p>
                Doxsify is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability to you shall not exceed the amount you paid in the 12 months prior to the claim.
              </p>
            </LegalSection>

            <LegalSection title="8. Service Availability">
              <p>
                We strive for 99.9% uptime but do not guarantee uninterrupted service. We may perform maintenance, updates, or experience technical issues. We are not liable for any loss resulting from service interruptions.
              </p>
            </LegalSection>

            <LegalSection title="9. Termination">
              <p>
                We reserve the right to suspend or terminate your account if you violate these terms, engage in fraudulent activity, or for any other reason at our discretion. You may terminate your account at any time by contacting support.
              </p>
            </LegalSection>

            <LegalSection title="10. Governing Law">
              <p>
                These terms are governed by applicable laws. Any disputes shall be resolved through binding arbitration. If any provision is found unenforceable, the remaining provisions remain in full effect.
              </p>
            </LegalSection>

            <LegalSection title="11. Contact">
              <p>
                For questions about these Terms, contact us at{' '}
                <a href="mailto:support@doxsify.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  support@doxsify.com
                </a>
              </p>
            </LegalSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

