import Footer from '../footer'
import Header from '../header'
import Gallery from './gallery'
import Landing from './landing'
import Testimonial from './testimonials'
import Values from './values'

export default function About() {
  return (
    <div className="sections">
      <div>
        <Header />
        <Landing />
      </div>
      <Gallery />
      <Values />
      <Testimonial />
      <Footer />
    </div>
  )
}
