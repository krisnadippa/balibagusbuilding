import Image from 'next/image'
import ProjectsSection from '@/app/components/ProjectsSection'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Our Projects',
  description: 'Jelajahi berbagai proyek arsitektur dan konstruksi terbaik dari Bali Bagus Building.',
}

export default function ProjectsPage() {
  return (
    <main style={{ backgroundColor: '#fcfcfc' }}>
      <Navbar />
      
      {/* Hero / Header Section for Projects */}
      <section style={{ position: 'relative', width: '100%', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '80px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <Image
            src="/images/projectimages.jpg"
            alt="Our Projects"
            fill
            quality={100}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
        </div>
        
        <div style={{ zIndex: 1, textAlign: 'center', padding: '2rem' }}>
          <h1 style={{ color: '#fff', fontSize: '3.5rem', fontWeight: 800, margin: 0, textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>Our Project</h1>
          <p style={{ color: '#eee', fontSize: '1.1rem', marginTop: '10px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>Menghadirkan inovasi dan kualitas pada setiap detail struktur.</p>
        </div>
      </section>

      {/* Projects Grid matching Home Page */}
      <div style={{ padding: '2rem 0' }}>
        <ProjectsSection hideHeader={true} />
      </div>

      <Footer />
    </main>
  )
}
