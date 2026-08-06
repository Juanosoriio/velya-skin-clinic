import { useState, useEffect } from 'react'
import './OffersBanner.css'

const offers = [
  '10% de descuento en productos dermatológicos durante el primer mes.',
  'Trae un amigo y ambos reciben un bono para terapia dermatológica.',
  'Primera terapia gratis al adquirir un Plan Premium Dermanova.',
]

function OffersBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % offers.length)
        setIsVisible(true)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="offers-banner">
      <div className="offers-banner__container">
        <span className="offers-banner__icon" aria-hidden="true">💎</span>
        <p className={`offers-banner__text ${isVisible ? 'offers-banner__text--visible' : 'offers-banner__text--hidden'}`}>
          {offers[currentIndex]}
        </p>
      </div>
      <div className="offers-banner__dots">
        {offers.map((_, index) => (
          <span
            key={index}
            className={`offers-banner__dot ${index === currentIndex ? 'offers-banner__dot--active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

export default OffersBanner
