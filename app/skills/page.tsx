import type { Metadata } from 'next';
import SkillsGrid from '@/components/SkillsGrid';

export const metadata: Metadata = {
  title: 'Skills & Capabilities',
  description: 'Technical skillset spanning offensive security, secure software development, and Web3.',
};

export default function SkillsPage() {
  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="eyebrow">{'// Technical Arsenal'}</div>
        <h2>Skills & <span className="grad-c-p">Capabilities</span></h2>
        <p className="text-m" style={{ marginTop: 12, maxWidth: 560 }}>
          A comprehensive skillset spanning offensive security, secure software development, and emerging
          Web3 technologies.
        </p>
        <SkillsGrid />
      </div>
    </div>
  );
}
