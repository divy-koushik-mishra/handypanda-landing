import Footer from "./_components/footer"
import Hero from "./_components/hero"
import NavBar from "./_components/navBar"
import FeatureSection from "./_components/purpose"

function App() {

  return (
    <div className="min-h-screen bg-custom-white font-display ">
      <NavBar />
      <Hero />
      <FeatureSection />
      <Footer />
    </div>
  )
}

export default App
