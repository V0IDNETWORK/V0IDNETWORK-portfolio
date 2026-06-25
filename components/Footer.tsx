import Link from 'next/link';
import { SITE } from '@/data/site-data';

export default function Footer() {
  return (
    <footer>
      <div className="footer-in">
        <Link href="/" className="footer-logo">[ILYA.SYS]</Link>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/cybersecurity">Security</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <a href={SITE.githubMain} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <div className="footer-copy">© 2026 ILYA — CYBER INTELLIGENCE DIVISION</div>
      </div>
    </footer>
  );
}
