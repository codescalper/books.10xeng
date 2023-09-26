import CLientHero from '@/components/ClientHero'
import { Header } from './Header'
import AboutUs from './AboutUs'
import Faq from './Faq'

export default function Home() {
  return (
    <div>
      <Header />
      <CLientHero />
      <AboutUs />
      <Faq />
    </div>
  )
}
