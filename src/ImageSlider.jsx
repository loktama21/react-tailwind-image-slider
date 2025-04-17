import { useState, useEffect, useRef } from "react" // 🔹 useRef added for hover detection
import { ChevronLeft, ChevronRight } from "lucide-react"
import SlideImage from "./components/SlideImage"
import SliderArrow from "./components/SliderArrow"
import DotIndicators from "./components/DotIndicators"

const images = [
  "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2023/12/29122040/lake.jpeg",
  "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6497ab17e0a211001d533f4c.jpg",
  "https://www.gokitetours.com/wp-content/uploads/2024/12/1.-Kathmandu-Valley-%E2%80%93-A-Cultural-Haven.webp",
]

export default function ImageSlider() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null) 

  useEffect(() => {
    startAutoSlide() // Start auto slide on mount

    return () => clearInterval(intervalRef.current) // Clean up on unmount
  }, [])

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
  }

  const pauseAutoSlide = () => clearInterval(intervalRef.current)
  const handleMouseEnter = pauseAutoSlide
  const handleMouseLeave = startAutoSlide

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter} // Pause auto-rotate
      onMouseLeave={handleMouseLeave} // Resume auto-rotate
      className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-md shadow-lg"
    >
      <SlideImage src={images[current]} alt={`Slide ${current + 1}`} />
      <SliderArrow direction="left" onClick={prevSlide} icon={ChevronLeft} />
      <SliderArrow direction="right" onClick={nextSlide} icon={ChevronRight} />
      <DotIndicators
        count={images.length}
        currentIndex={current}
        onDotClick={setCurrent}
      />
    </div>
  )
}
