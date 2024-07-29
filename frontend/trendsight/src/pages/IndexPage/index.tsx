import Contact from "../../components/landingpage/Contact"
import Features from "../../components/landingpage/Features"
import Hero from "../../components/landingpage/Hero"
import Navbar from "../../components/landingpage/Navbar"

function IndexPage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Contact/>
    </div>
  )
}

export default IndexPage
