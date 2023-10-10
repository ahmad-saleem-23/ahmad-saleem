import AboutMe from './component/AboutMe'
import Logo from './component/Logo'
import { Nav } from './component/menu/Nav'
import Contacts from './component/Contacts'
import Hero from './component/Hero'
// import HorizontalScrollLoop from './component/HorizontalScroll'
import Experience from './component/Experience'
import Tach from './component/Tech'
import Work from './component/Works'
import StarsCanvas from './component/canvas/Stars'

const App = () => {
  return (
    <>
      <div className="realative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center  ">
          <Logo />
          <Nav />
          <Hero />
        </div>
        <AboutMe />
        <Experience />
        <Tach />
        <Work />
        {/* <HorizontalScrollLoop/> */}

        <div className="relative z-0">
          <Contacts />
          <StarsCanvas />
        </div>
      </div>
    </>
  )
}

export default App
