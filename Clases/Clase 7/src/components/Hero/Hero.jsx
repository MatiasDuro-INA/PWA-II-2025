import React, { useState, useEffect } from 'react'
import "./Styles.css"

export default function Hero() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
      {
        image: "/banner-de-tienda-online-con-productos-modernos.jpg",
        title: "Bienvenido a Nuestra Tienda",
        subtitle: "Los mejores productos al mejor precio",
      },
      {
        image: "/banner-de-ofertas-especiales-ecommerce.jpg",
        title: "Ofertas Especiales",
        subtitle: "Descuentos de hasta 50% en productos seleccionados",
      },
      {
        image: "/banner-de-env-o-gratis-ecommerce.jpg",
        title: "Envío Gratis",
        subtitle: "En compras mayores a $50",
      },
    ]
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
  
      return () => clearInterval(timer)
    }, [slides.length])
  
    const goToSlide = (index) => {
      setCurrentSlide(index)
    }
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  
    return (
      <section className="hero" id="inicio">
        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} />
                <div className="carousel-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
  
          <button className="carousel-button prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-button next" onClick={nextSlide}>
            ❯
          </button>
  
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  