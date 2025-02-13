import './App.css'
import Hero from './components/hero/Hero.jsx'
import Section1 from './components/section1/Section1.jsx'
import Footer from './components/Footer/Footer.jsx'
import LastSection from './components/LastSection/LastSection.jsx'
import InstagramSection from './components/Instagram/InstagramSection.jsx'
import BlogSite from './components/Blogsite/BlogSite.jsx'

function App() {

  return (
    <div>
      <Hero />
      <Section1 />
      <BlogSite />
      <InstagramSection />
      <LastSection />
      <Footer />
    </div>
  )
}

export default App
