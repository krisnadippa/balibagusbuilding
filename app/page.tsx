import Navbar from '@/app/components/Navbar'
import HeroSection from '@/app/components/HeroSection'
import GalleryStats from '@/app/components/GalleryStats'
import ExpertiseSection from '@/app/components/ExpertiseSection'
import ProjectsSection from '@/app/components/ProjectsSection'
import AboutSection from '@/app/components/AboutSection'
import VideoSection from '@/app/components/VideoSection'
import TestimonialsSection from '@/app/components/TestimonialsSection'
import Footer from '@/app/components/Footer'

// Partners - static, no interactivity needed
const partners = ['BestBank', 'ShinesSun', 'PeopleX', 'FancyWear', 'NextFlow']

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <GalleryStats />
      <ExpertiseSection />

      {/* Partners - infinite auto-scrolling client logos */}
      <section className="partners">
        <div className="partners-slider">
          <div className="partners-track">
            {partners.map((name, idx) => (
              <div key={`p1-${idx}`} className="partner-item">{name}</div>
            ))}
            {partners.map((name, idx) => (
              <div key={`p2-${idx}`} className="partner-item">{name}</div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />
      <AboutSection />
      <VideoSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
