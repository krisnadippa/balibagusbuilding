'use client'

import { useRef } from 'react'
import { useLang } from '@/app/context/LanguageContext'

export default function TestimonialsSection() {
  const { t } = useLang()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const activeDividerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const divider = activeDividerRef.current
    if (!container || !divider) return

    const { scrollTop, scrollHeight, clientHeight } = container
    const maxScroll = scrollHeight - clientHeight
    if (maxScroll <= 0) return

    const percent = scrollTop / maxScroll
    const trackHeight = container.clientHeight
    const indicatorHeight = 60 // height of .testi-divider-active in CSS
    const maxTop = Math.max(0, trackHeight - indicatorHeight)
    const currentTop = percent * maxTop

    divider.style.transform = `translateY(${currentTop}px)`
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="testi-container">
        <div className="testi-left">
          <p className="testi-tag">{t.testiTag}</p>
          <h2 className="testi-title">{t.testiTitle}</h2>
          <a href="#contact" className="btn-write-review">{t.testiCta}</a>
        </div>

        {/* Vertical divider line */}
        <div className="testi-divider">
          <div className="testi-divider-active" ref={activeDividerRef} />
        </div>

        <div className="testi-right">
          <div 
            className="testi-scroll-container" 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            data-lenis-prevent
          >
            {/* Review 1 */}
            <div className="testi-item">
              <div className="testi-item-header">
                <div className="testi-item-user">
                  <div className="testi-avatar-circle">
                    <span>SD</span>
                  </div>
                  <div className="testi-user-details">
                    <p className="testi-user-name">{t.testiName1}</p>
                    <p className="testi-user-role">{t.testiRole1}</p>
                  </div>
                </div>
                <div className="testi-item-rating">
                  <span className="star-yellow">&#9733;</span>
                  <span className="rating-text">5.0</span>
                </div>
              </div>
              <p className="testi-item-text">{t.testiText1}</p>
            </div>

            {/* Review 2 */}
            <div className="testi-item">
              <div className="testi-item-header">
                <div className="testi-item-user">
                  <div className="testi-avatar-circle">
                    <span>IK</span>
                  </div>
                  <div className="testi-user-details">
                    <p className="testi-user-name">{t.testiName2}</p>
                    <p className="testi-user-role">{t.testiRole2}</p>
                  </div>
                </div>
                <div className="testi-item-rating">
                  <span className="star-yellow">&#9733;</span>
                  <span className="rating-text">5.0</span>
                </div>
              </div>
              <p className="testi-item-text">{t.testiText2}</p>
            </div>

            {/* Review 3 */}
            <div className="testi-item">
              <div className="testi-item-header">
                <div className="testi-item-user">
                  <div className="testi-avatar-circle">
                    <span>AF</span>
                  </div>
                  <div className="testi-user-details">
                    <p className="testi-user-name">{t.testiName3}</p>
                    <p className="testi-user-role">{t.testiRole3}</p>
                  </div>
                </div>
                <div className="testi-item-rating">
                  <span className="star-yellow">&#9733;</span>
                  <span className="rating-text">5.0</span>
                </div>
              </div>
              <p className="testi-item-text">{t.testiText3}</p>
            </div>

            {/* Review 4 */}
            <div className="testi-item">
              <div className="testi-item-header">
                <div className="testi-item-user">
                  <div className="testi-avatar-circle">
                    <span>SJ</span>
                  </div>
                  <div className="testi-user-details">
                    <p className="testi-user-name">{t.testiName4}</p>
                    <p className="testi-user-role">{t.testiRole4}</p>
                  </div>
                </div>
                <div className="testi-item-rating">
                  <span className="star-yellow">&#9733;</span>
                  <span className="rating-text">5.0</span>
                </div>
              </div>
              <p className="testi-item-text">{t.testiText4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
