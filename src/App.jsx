import './App.css'
import Hero from './components/hero/Hero.jsx'
import Section1 from './components/section1/Section1.jsx'
import Footer from './components/Footer/Footer.jsx'
import LastSection from './components/LastSection/LastSection.jsx'
import InstagramSection from './components/Instagram/InstagramSection.jsx'
import BlogSite from './components/Blogsite/BlogSite.jsx'
import Section2 from './components/section2/section2.jsx'
import Section3 from './components/section3/Section3.jsx'

function App() {

  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <BlogSite />
      <InstagramSection />
      <LastSection />
      <Footer />
    </div>
  )
}

export default App
