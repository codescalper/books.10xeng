import CLientHero from '@/components/ClientHero'
import { Header } from './Header'
import AboutUs from './AboutUs'
import Faq from './Faq'
import Footer from './Footer'
import OpenSource from './OpenSource'

export default function Home() {
  return (
    <div>
      <CLientHero />
      <OpenSource />
      <AboutUs />
      <Faq />
      <Footer />
    </div>
  )
}
