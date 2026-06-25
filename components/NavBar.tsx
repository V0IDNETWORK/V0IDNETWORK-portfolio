'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/data/site-data';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clock, setClock] = useState('00:00:00');

  useEffect(() => {
    const update = () => setClock(new Date().toTimeString().slice(0, 8) + ' UTC');
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo">
          <span className="nav-logo-bracket">[</span>ILYA<span className="nav-logo-bracket">]</span>
        </Link>
        <div className="nav-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`nav-link${isActive(pathname, item.href) ? ' active' : ''}`}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="nav-right">
          <div className="nav-threat">
            <div className="threat-bar" />
            <span className="threat-label">Low Threat</span>
          </div>
          <div className="nav-clock" aria-live="off">{clock}</div>
          <div className="nav-status-dot" aria-hidden="true" />
          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div id="mobile-nav" className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`nav-link${isActive(pathname, item.href) ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
