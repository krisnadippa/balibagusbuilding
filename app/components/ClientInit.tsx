'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function ClientInit() {
  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium easeOutQuint
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // 2. Setup Scroll Reveal Animations Dynamically
    const animTargets = [
      { selector: '.hero-title', effect: 'reveal-up' },
      { selector: '.btn-order-now', effect: 'reveal-up', delay: 150 },
      { selector: '.hero-stats-capsule', effect: 'reveal-right', delay: 100 },
      { selector: '.hero-explore-card', effect: 'reveal-right', delay: 250 },
      { selector: '.gs-left', effect: 'reveal-left' },
      { selector: '.gs-right', effect: 'reveal-right' },
      { selector: '.exp-left', effect: 'reveal-left' },
      { selector: '.exp-right', effect: 'reveal-right' },
      { selector: '.proj-header', effect: 'reveal-up' },
      { selector: '.proj-filters', effect: 'reveal-up', delay: 100 },
      { selector: '.proj-card', effect: 'reveal-scale' },
      { selector: '.about-left', effect: 'reveal-left' },
      { selector: '.about-right', effect: 'reveal-right' },
      { selector: '.video-section', effect: 'reveal-scale' },
      { selector: '.testi-left', effect: 'reveal-left' },
      { selector: '.testi-divider', effect: 'reveal-scale' },
      { selector: '.testi-right', effect: 'reveal-right' },
      { selector: '.footer-card', effect: 'reveal-scale' }
    ]

    // Apply animation classes
    animTargets.forEach((target) => {
      const elements = document.querySelectorAll(target.selector)
      elements.forEach((el) => {
        el.classList.add(target.effect)
        if (target.delay) {
          ;(el as HTMLElement).style.transitionDelay = `${target.delay}ms`
        }
      })
    })

    // Setup Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px', // trigger slightly before fully on screen
      threshold: 0.05,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    // Observe elements
    const revealClasses = ['.reveal-up', '.reveal-left', '.reveal-right', '.reveal-scale']
    revealClasses.forEach((cls) => {
      document.querySelectorAll(cls).forEach((el) => observer.observe(el))
    })

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      observer.disconnect()
    }
  }, [])

  return null
}
