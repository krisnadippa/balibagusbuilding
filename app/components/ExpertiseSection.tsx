'use client'

import Image from 'next/image'
import { useLang } from '@/app/context/LanguageContext'

export default function ExpertiseSection() {
  const { t } = useLang()

  return (
    <section className="expertise" id="services">
      <div className="exp-container">
        {/* Left image */}
        <div className="exp-left">
          <div className="exp-img-wrap">
            <Image
              src="/images/interior_style.png"
              alt="Keahlian Arsitektur"
              fill
              className="exp-img object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="exp-img-caption">
              <span className="caption-num">05</span>
              <p className="caption-text">{t.expCaption}</p>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="exp-right">
          <p className="exp-tag">{t.expTag}</p>
          <h2 className="exp-title">{t.expTitle}</h2>
          <p className="exp-desc">{t.expDesc}</p>

          <ul className="exp-list">
            <li className="exp-item">
              <span className="exp-num">01</span>
              <span className="exp-name">{t.expItem1}</span>
            </li>
            <li className="exp-item">
              <span className="exp-num">02</span>
              <span className="exp-name">{t.expItem2}</span>
            </li>
            <li className="exp-item exp-item-cta">
              <span className="exp-num">03</span>
              <span className="exp-name">{t.expItem3}</span>
              <span className="exp-arrow">&#8599;</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
