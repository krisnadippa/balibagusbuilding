'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLang } from '@/app/context/LanguageContext'

type FilterKey = 'all' | 'housing' | 'corporate' | 'medical' | 'campus' | 'traditional' | 'civic' | 'factory' | 'iron_jungle'

const projects = [
  { id: 1, category: 'housing', img: '/images/project_house1.png', nameKey: 'pname1' as const, subKey: 'psub1' as const, classId: 'proj-card-1' },
  { id: 2, category: 'housing', img: '/images/project_apartment.png', nameKey: 'pname2' as const, subKey: 'psub2' as const, classId: 'proj-card-2' },
  { id: 3, category: 'corporate', img: '/images/project_commercial.png', nameKey: 'pname3' as const, subKey: 'psub3' as const, classId: 'proj-card-3' },
  { id: 4, category: 'corporate', img: '/images/video_house.png', nameKey: 'pname4' as const, subKey: 'psub4' as const, classId: 'proj-card-4' },
  { id: 5, category: 'housing', img: '/images/interior_style.png', nameKey: 'pname5' as const, subKey: 'psub5' as const, classId: 'proj-card-5' },
]

export default function ProjectsSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const { t } = useLang()
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filters: { key: FilterKey; labelKey: 'filterAll' | 'filterHousing' | 'filterCorporate' | 'filterMedical' | 'filterCampus' | 'filterTraditional' | 'filterCivic' | 'filterFactory' | 'filterIronJungle' }[] = [
    { key: 'all', labelKey: 'filterAll' },
    { key: 'housing', labelKey: 'filterHousing' },
    { key: 'corporate', labelKey: 'filterCorporate' },
    { key: 'medical', labelKey: 'filterMedical' },
    { key: 'campus', labelKey: 'filterCampus' },
    { key: 'traditional', labelKey: 'filterTraditional' },
    { key: 'civic', labelKey: 'filterCivic' },
    { key: 'factory', labelKey: 'filterFactory' },
    { key: 'iron_jungle', labelKey: 'filterIronJungle' },
  ]

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  )

  return (
    <section className="projects" id="projects">
      <div className="proj-container">
        {!hideHeader && (
          <div className="proj-header" style={{ alignItems: 'flex-end' }}>
            <div className="proj-header-left">
              <p className="proj-tag">{t.projTag}</p>
              <h2 className="proj-title">{t.projTitle}</h2>
            </div>
            <div className="proj-header-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
              <p className="proj-desc">{t.projDesc}</p>
              <Link href="/projects" className="proj-view-all-link" style={{ 
                alignSelf: 'flex-end',
                color: 'var(--dark, #1a1a1a)',
                fontSize: '0.95rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'color 0.25s ease, opacity 0.25s ease',
                paddingBottom: '2px',
                cursor: 'pointer'
              }}>
                <span>{t.viewAll || 'Lihat Semua'}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="proj-view-all-arrow" style={{ transition: 'transform 0.25s ease' }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="proj-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {t[f.labelKey]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={`proj-grid ${activeFilter !== 'all' ? 'is-filtered' : ''}`}>
          {filtered.map((proj) => (
            <Link href="/projects" key={proj.id} className={`proj-card ${proj.classId}`} style={{ textDecoration: 'none' }}>
              <div className="proj-card-header-text">
                <div className="proj-card-titles">
                  <h3 className="proj-card-name">{t[proj.nameKey]}</h3>
                  <p className="proj-card-sub">{t[proj.subKey]}</p>
                </div>
                <span className="proj-card-circle-arrow">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
              <div className="proj-card-img-wrap">
                <Image
                  src={proj.img}
                  alt={t[proj.nameKey]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
