import CLientHero from '@/components/ClientHero'
import { Header } from './Header'
import AboutUs from './AboutUs'
import Faq from './Faq'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <CLientHero />
      <AboutUs />
      <Faq />
      <Footer />
    </div>
  )
}
