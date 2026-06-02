'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLang } from '@/app/context/LanguageContext'

const thumbs = [
  { src: '/images/project_house1.png', alt: 'Proyek 1' },
  { src: '/images/project_apartment.png', alt: 'Proyek 2' },
  { src: '/images/interior_style.png', alt: 'Proyek 3' },
]

export default function GalleryStats() {
  const { t } = useLang()
  const [activeThumb, setActiveThumb] = useState(0)

  const prev = () => setActiveThumb((i) => (i === 0 ? thumbs.length - 1 : i - 1))
  const next = () => setActiveThumb((i) => (i === thumbs.length - 1 ? 0 : i + 1))

  return (
    <section className="gallery-stats" id="gallery">
      <div className="gs-container">
        {/* Left */}
        <div className="gs-left">
          <div className="gallery-thumbs">
            {thumbs.map((thumb, i) => (
              <div
                key={i}
                className={`thumb ${activeThumb === i ? 'active' : ''}`}
                onClick={() => setActiveThumb(i)}
              >
                <Image src={thumb.src} alt={thumb.alt} fill className="object-cover" sizes="120px" />
              </div>
            ))}
          </div>

          <div className="gallery-nav">
            {thumbs.map((_, i) => (
              <span
                key={i}
                className={`g-page ${activeThumb === i ? 'active' : ''}`}
                onClick={() => setActiveThumb(i)}
              />
            ))}
            <div className="g-arrows">
              <button className="g-arrow" onClick={prev} aria-label="Previous">&#8249;</button>
              <button className="g-arrow" onClick={next} aria-label="Next">&#8250;</button>
            </div>
          </div>

          <h2 className="gs-title">{t.gsTitle}</h2>
          <p className="gs-desc">{t.gsDesc}</p>
        </div>

        {/* Right */}
        <div className="gs-right">
          <div className="gs-main-img">
            <Image
              src="/images/project_commercial.png"
              alt="Proyek Utama"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-num">200+</span>
              <span className="stat-label">{t.stat1}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">350+</span>
              <span className="stat-label">{t.stat2}</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">1200+</span>
              <span className="stat-label">{t.stat3}</span>
            </div>
          </div>
          <div className="reviews-row">
            <div className="rating-badge">
              <span className="star-icon">&#9733;</span>
              <span className="rating-num">4.8</span>
            </div>
            <a href="#testimonials" className="btn-outline">{t.seeReviews}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
