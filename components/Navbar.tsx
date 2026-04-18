'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact-title' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={`navbar-wrap ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar">
        <Link href="/" className="brand" aria-label="Rian homepage">
          Rian<span className="brand-dot">.</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
