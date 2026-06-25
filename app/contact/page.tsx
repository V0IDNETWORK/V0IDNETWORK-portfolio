import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Available for penetration testing engagements, software development projects, and security consulting.',
};

export default function ContactPage() {
  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="eyebrow">{'// Secure Channel'}</div>
        <h2>Establish <span className="grad-c-p">Contact</span></h2>
        <p className="text-m" style={{ marginTop: 12, maxWidth: 560 }}>
          Available for penetration testing engagements, software development projects, and security
          consulting.
        </p>
        <div className="contact-grid" style={{ marginTop: 40 }}>
          <div>
            <a href={`mailto:${SITE.email}`} className="contact-card">
              <div className="cc-icon" aria-hidden="true">📧</div>
              <div>
                <div className="cc-label">Encrypted Email</div>
                <div className="cc-val">{SITE.email}</div>
              </div>
            </a>
            <a href={`tel:${SITE.phone}`} className="contact-card">
              <div className="cc-icon" aria-hidden="true">📱</div>
              <div>
                <div className="cc-label">Phone / WhatsApp</div>
                <div className="cc-val">{SITE.phoneDisplay}</div>
              </div>
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="cc-icon" aria-hidden="true">📸</div>
              <div>
                <div className="cc-label">Instagram</div>
                <div className="cc-val">@ilianothing</div>
              </div>
            </a>
            <a href={SITE.freelance} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="cc-icon" aria-hidden="true">💼</div>
              <div>
                <div className="cc-label">Freelance Profile</div>
                <div className="cc-val">karlancer.com/profile/703128</div>
              </div>
            </a>
            <div className="avail-banner">
              <div className="nav-status-dot" aria-hidden="true" />
              <div>
                <div className="avail-txt-h">Available for New Projects</div>
                <div className="avail-txt-s">Currently accepting pentesting and development engagements</div>
              </div>
            </div>
            <div className="gh-row">
              <a
                href={SITE.githubMain}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: 10, padding: '8px 16px', flex: 1, justifyContent: 'center' }}
              >
                niproot
              </a>
              <a
                href={SITE.githubOrg}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: 10, padding: '8px 16px', flex: 1, justifyContent: 'center' }}
              >
                V0IDNETWORK
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
