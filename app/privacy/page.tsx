import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Doxsify collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400">Last updated: May 30, 2026</p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed max-w-none">
            <LegalSection title="1. Introduction">
              <p>
                Doxsify (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </LegalSection>

            <LegalSection title="2. Information We Collect">
              <p>We collect the following types of information:</p>
              <ul>
                <li><strong>Account information:</strong> Email address, name, and password when you create an account.</li>
                <li><strong>Usage data:</strong> IP address, browser type, pages visited, and time spent on our site.</li>
                <li><strong>Files:</strong> Documents and images you upload for processing. These are deleted within 1 hour.</li>
                <li><strong>Payment information:</strong> Handled entirely by Mollie, our payment processor. We do not store your payment card details.</li>
              </ul>
            </LegalSection>

            <LegalSection title="3. How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor usage patterns and analyze trends</li>
                <li>Detect and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </LegalSection>

            <LegalSection title="4. File Security">
              <p>
                We take file security extremely seriously. All file uploads are encrypted with 256-bit SSL during transfer. Files are processed in isolated, secure environments and are permanently deleted from our servers within 1 hour of processing. We do not read, analyze, share, or retain the content of your files.
              </p>
            </LegalSection>

            <LegalSection title="5. Cookies">
              <p>
                We use essential cookies to operate our service, analytics cookies to understand usage, and preference cookies to remember your settings. You can control cookie settings through your browser. Disabling cookies may affect some functionality.
              </p>
            </LegalSection>

            <LegalSection title="6. Third-Party Services">
              <p>We work with trusted third parties to operate our service:</p>
              <ul>
                <li><strong>Mollie.com:</strong> Merchant of Record and payment processor for all subscriptions.</li>
                <li><strong>Analytics providers:</strong> To understand how users interact with our service.</li>
                <li><strong>Cloud infrastructure providers:</strong> To host and process files.</li>
              </ul>
              <p>These parties have their own privacy policies and we encourage you to review them.</p>
            </LegalSection>

            <LegalSection title="7. Data Retention">
              <p>
                We retain account information for as long as your account is active. File data is deleted within 1 hour as described above. You may request deletion of your account and associated data at any time by contacting us at support@doxsify.com.
              </p>
            </LegalSection>

            <LegalSection title="8. Your Rights (GDPR)">
              <p>If you are located in the European Economic Area, you have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </LegalSection>

            <LegalSection title="9. Children's Privacy">
              <p>
                Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal data from a child, we will take steps to delete that information.
              </p>
            </LegalSection>

            <LegalSection title="10. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{' '}
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
