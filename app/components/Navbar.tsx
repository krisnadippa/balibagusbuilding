'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLang } from '@/app/context/LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/#hero', label: t.navHome, id: 'hero' },
    { href: '/#about', label: t.navAbout, id: 'about' },
    { href: '/#services', label: t.navServices, id: 'services' },
    { href: '/projects', label: t.navProjects, id: 'projects' },
    { href: '/#testimonials', label: t.navBlog, id: 'testimonials' },
    { href: '/#contact', label: t.navContact, id: 'contact' },
  ]

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        {/* Logo */}
        <Link href="/#hero" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <span className="logo-normal">BaliBagus</span>
          <span className="logo-bold">Building</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(link.id)
                  setMobileOpen(false)
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          {/* Language Toggle */}
          <div className="lang-toggle" aria-label="Language Toggle">
            <button
              className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
              onClick={() => setLang('id')}
            >
              ID
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          <a href="/#contact" className="btn-cta">
            {t.navCta}
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}
