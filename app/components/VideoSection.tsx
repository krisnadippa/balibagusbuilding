import Image from 'next/image'

export default function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="video-container">
        <div className="video-box">
          <Image
            src="/images/video_house.png"
            alt="Bali Bagus Building Project Video"
            fill
            className="video-bg-img object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="video-overlay">
            <button className="video-play-btn" aria-label="Play Video">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <polygon points="8,5 20,12 8,19" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
