'use client'

import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ProjectsSection from '@/app/components/ProjectsSection'
import { useLang } from '@/app/context/LanguageContext'

export default function ProjectsClient() {
  const { t } = useLang()

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Projects Hero Frame (InfinityGo Mockup Style) */}
      <div className="projects-hero-frame">
        <section className="projects-hero">
          <div className="projects-hero-bg">
            <Image
              src="/images/projectimages.jpg"
              alt={t.projectsPageTitle || 'Our Projects'}
              fill
              quality={100}
              className="object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
            <div className="projects-hero-overlay" />
          </div>
          
          <div className="projects-hero-content">
            <h1 className="projects-hero-title">
              {t.projectsPageTitle || 'Our Projects'}
            </h1>
            <p className="projects-hero-subtitle">
              {t.projectsPageDesc || 'Explore the best architectural and construction projects.'}
            </p>
          </div>
        </section>
      </div>

      {/* Projects Grid Section */}
      <div style={{ padding: '1rem 0 5rem 0', flex: 1 }}>
        <ProjectsSection hideHeader={true} />
      </div>

      <Footer />
    </main>
  )
}
