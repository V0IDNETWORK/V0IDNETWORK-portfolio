import type { Metadata, Viewport } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BootSequence from '@/components/BootSequence';
import BackgroundEffects from '@/components/BackgroundEffects';
import { SITE } from '@/data/site-data';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: 'Ilya' }],
  creator: 'Ilya',
  openGraph: {
    title: SITE.shortTitle,
    description: 'Elite cybersecurity engineer. Penetration testing. Offensive security. Web3. Full stack.',
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.shortTitle,
    description: 'Elite cybersecurity engineer. Penetration testing. Offensive security. Web3. Full stack.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050816',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <BootSequence />
        <BackgroundEffects />
        <NavBar />
        <main id="main-content" className="page-enter">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
