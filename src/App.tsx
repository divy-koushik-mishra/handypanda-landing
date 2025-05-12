import Footer from "./_components/footer"
import Hero from "./_components/hero"
import NavBar from "./_components/navBar"
import ProductCategories from "./_components/productCategories"
import FeatureSection from "./_components/purpose"

function App() {

  return (
    <div className="min-h-screen bg-custom-white font-display ">
      <NavBar />
      <Hero />
      <FeatureSection />
      <ProductCategories />
      <Footer />
    </div>
  )
}

export default App
