'use client'

import Image from 'next/image'
import { useLang } from '@/app/context/LanguageContext'

export default function AboutSection() {
  const { t } = useLang()

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <p className="about-tag">{t.aboutTag}</p>
          <h2 className="about-title">{t.aboutTitle}</h2>
          <a href="#contact" className="btn-outline-dark">{t.aboutCta}</a>
        </div>

        <div className="about-right">
          <div className="about-img-wrap">
            <Image
              src="/images/team_photo.png"
              alt="Tim Bali Bagus Building"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <p className="about-desc">{t.aboutDesc}</p>
        </div>
      </div>
    </section>
  )
}
