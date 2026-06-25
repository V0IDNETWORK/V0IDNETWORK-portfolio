import type { Metadata } from 'next';
import ProjectsGrid from '@/components/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Enterprise-grade applications, security tools, and research systems built with precision.',
};

export default function ProjectsPage() {
  return (
    <div className="wrap">
      <div className="section-pad">
        <div className="eyebrow">{'// Operations Portfolio'}</div>
        <h2>Featured <span className="grad-c-p">Projects</span></h2>
        <p className="text-m" style={{ marginTop: 12, maxWidth: 560 }}>
          Enterprise-grade applications, security tools, and research systems built with precision and purpose.
        </p>
        <ProjectsGrid />
      </div>
    </div>
  );
}
