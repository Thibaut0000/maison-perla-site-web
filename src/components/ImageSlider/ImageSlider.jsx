import { useRef } from 'react'
import './ImageSlider.css'

function ImageSlider({ images }) {
    const sliderRef = useRef(null)

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { current } = sliderRef
            const scrollAmount = current.clientWidth

            if (direction === 'left') {
                current.scrollLeft -= scrollAmount
            } else {
                current.scrollLeft += scrollAmount
            }
        }
    }

    if (!images || images.length === 0) return null

    return (
        <div className="image-slider">
            <div className="image-slider__container" ref={sliderRef}>
                {images.map((img, index) => (
                    <div key={index} className="image-slider__item">
                        <img src={img} alt={`Slide ${index + 1}`} className="image-slider__img" />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                className="image-slider__btn image-slider__btn--prev"
                onClick={() => scroll('left')}
                aria-label="Previous image"
            >
                <svg viewBox="0 0 24 24" className="icon-arrow">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </button>

            <button
                className="image-slider__btn image-slider__btn--next"
                onClick={() => scroll('right')}
                aria-label="Next image"
            >
                <svg viewBox="0 0 24 24" className="icon-arrow">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </button>
        </div>
    )
}

export default ImageSlider
