'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'ok' | 'error';

const SUBJECT_OPTIONS = [
  'Penetration Testing',
  'Web Security Audit',
  'Software Development',
  'Mobile Development',
  'Security Consulting',
  'Web3 / Smart Contracts',
  'Other',
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setFieldErrors({});
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('fn') as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem('fe') as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem('fs') as HTMLSelectElement).value,
      message: (form.elements.namedItem('fm') as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        if (json.fieldErrors) setFieldErrors(json.fieldErrors);
        setErrorMsg(json.error || 'Transmission failed — please try again.');
        setStatus('error');
        return;
      }

      setStatus('ok');
      form.reset();
    } catch {
      setErrorMsg('Network error — transmission could not be sent.');
      setStatus('error');
    }
  }

  return (
    <div className="form-wrap">
      <div className="form-title">Transmit Secure Message</div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="fg">
          <label htmlFor="fn">Name</label>
          <input type="text" id="fn" name="fn" placeholder="Your name" required autoComplete="name" />
          {fieldErrors.name && <div className="field-err">{fieldErrors.name}</div>}
        </div>
        <div className="fg">
          <label htmlFor="fe">Email</label>
          <input type="email" id="fe" name="fe" placeholder="your@email.com" required autoComplete="email" />
          {fieldErrors.email && <div className="field-err">{fieldErrors.email}</div>}
        </div>
        <div className="fg">
          <label htmlFor="fs">Subject</label>
          <select id="fs" name="fs" defaultValue={SUBJECT_OPTIONS[0]}>
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="fg">
          <label htmlFor="fm">Message</label>
          <textarea id="fm" name="fm" placeholder="Describe your project or security requirements..." required />
          {fieldErrors.message && <div className="field-err">{fieldErrors.message}</div>}
        </div>
        <button
          type="submit"
          className="btn btn-c"
          style={{ width: '100%', justifyContent: 'center' }}
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Transmitting...' : 'Transmit Message →'}
        </button>
        <div
          className={`form-msg ${status === 'ok' ? 'ok' : status === 'error' ? 'err' : ''}`}
          role="status"
          aria-live="polite"
        >
          {status === 'ok' && '[✓] Message transmitted — Response within 24h'}
          {status === 'error' && `[ERROR] — ${errorMsg}`}
        </div>
      </form>
    </div>
  );
}
