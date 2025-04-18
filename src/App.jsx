import ImageSlider from "./ImageSlider"
import NavBar from "./NavBar"

function App() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gray-180">
        <ImageSlider />
      </div>
    </>
  )
}

export default App
