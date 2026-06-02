'use client'

import Link from 'next/link'
import { useLang } from '@/app/context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-card">
        {/* Background Image is set in CSS */}
        <div className="footer-overlay" />
        
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col brand-col">
            <Link href="/#hero" className="footer-logo">
              <span className="logo-normal">BaliBagus</span>
              <span className="logo-bold">Building</span>
            </Link>
            <p className="footer-desc">{t.footerDesc}</p>
            <div className="footer-socials">
              <a href="#" className="social-box" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3H15.8c-1.5 0-2 .9-2 1.9v2.2h3.3l-.5 3.5H13.8V24C19.6 23.1 24 18.1 24 12.1z"/>
                </svg>
              </a>
              <a href="#" className="social-box" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.2 2.4h3.3L14.2 12l8.5 11.2h-6.7l-5.2-6.8-6 6.8H1.4l7.8-8.9L1 2.4h6.9l4.7 6.2 5.6-6.2zm-1.2 17.6h1.8L7.1 4.2H5.1l11.9 15.8z"/>
                </svg>
              </a>
              <a href="#" className="social-box" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.2.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.2.1-1.6.1-4.8.1-3.2 0-3.6 0-4.8-.1-3.2-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1 0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
                </svg>
              </a>
              <a href="#" className="social-box" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3-1.9 0-2.1 1.5-2.1 2.9v5.7H9.3V9h3.5v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t.footerNavTitle}</h3>
            <ul className="footer-links">
              <li><Link href="/#hero">{t.navHome}</Link></li>
              <li><Link href="/#about">{t.navAbout}</Link></li>
              <li><Link href="/#services">{t.navServices}</Link></li>
              <li><Link href="/projects">{t.navProjects}</Link></li>
              <li><Link href="/#testimonials">{t.navBlog}</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t.footerServicesTitle}</h3>
            <ul className="footer-links">
              <li><a href="#services">{t.expItem1}</a></li>
              <li><a href="#services">{t.expItem2}</a></li>
              <li><a href="#services">{t.expItem3}</a></li>
              <li><a href="#services">{t.navServices} Interior</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3 className="footer-col-title">{t.footerContactTitle}</h3>
            <ul className="footer-links contact-links">
              <li><a href="mailto:info@balibagusbuilding.com">info@balibagusbuilding.com</a></li>
              <li className="address-item">{t.footerAddress}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copy-wrap">
        <p className="footer-copy-text">{t.footerCopy}</p>
      </div>
    </footer>
  )
}
