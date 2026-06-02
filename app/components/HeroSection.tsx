'use client'

import Image from 'next/image'
import { useLang } from '@/app/context/LanguageContext'

export default function HeroSection() {
  const { t } = useLang()

  return (
    <div className="hero-frame">
      <section className="hero" id="hero">
        <div className="hero-bg">
          <Image
            src="/images/herob31.jpg"
            alt="Bali Bagus Building - Modern Architecture"
            fill
            priority
            className="hero-img"
            sizes="100vw"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">{t.heroTitle}</h1>
            <button className="btn-order-now">
              <span className="arrow-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
              {t.heroOrderNow}
            </button>
          </div>

          <div className="hero-right">
            {/* Top stats capsule card */}
            <div className="hero-stats-capsule">
              <div className="stats-info">
                <span className="stats-number">{t.heroProjectsCount}</span>
                <span className="stats-sub">{t.heroProjectsSub}</span>
              </div>
              <span className="arrow-diagonal">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>

            {/* Bottom glassmorphic project explore card */}
            <div className="hero-explore-card">
              <div className="explore-card-img">
                <Image
                  src="/images/project_house1.png"
                  alt={t.heroExploreTitle}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>
              <div className="explore-card-footer">
                <div className="explore-info">
                  <p className="explore-title">{t.heroExploreTitle}</p>
                  <p className="explore-desc">{t.heroExploreDesc}</p>
                </div>
                <span className="arrow-diagonal">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
