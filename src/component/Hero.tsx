import { motion } from 'framer-motion'
import { styles } from '../styles'
// import ComputersCanvas  from "./canvas/computers";
import { lazy } from 'react'

const DynamicComputersCanvas = lazy(() => import('./canvas/computers'))
const Hero = () => {
  return (
    <section className="relativ w-full h-screen mx-auto pt-60">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Ahmad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a junior software developer, <br className="sm:block hidden" />I
            love working with fullstack apps, and building new stuff.
          </p>
        </div>
      </div>

      
        <DynamicComputersCanvas />
   

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#aboutMe">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}
export default Hero
