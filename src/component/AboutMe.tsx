import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'

function AboutMe() {
  return (
    <>
      <section>
        <div className="flex flex-col-reverse gap-10 overflow-hidden sm:flex-col sm:items-center sm:gap-5 md:flex-row md:items-center md:gap-5 lg:flex-row lg:items-center lg:gap-5 xl:mt-12 xl:flex-row">
          <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className="bg-black-100 flex w-full flex-col items-center justify-center rounded-2xl p-8 lg:w-1/2"
          >
            <div className="font-bold text-white">
              <h1 className="py-2 text-3xl font-bold  text-white">About me</h1>
              <p className="py-2">
                Hey there, I am a multi-passionate professional who recently
                made the jump into tech after practicing law for a while.
              </p>
              <p className="py-2">
                I completed a software development bootcamp and now I am excited
                to bring my diverse expertise to my next opportunity. I am
                passionate about using my technical skills to develop innovative
                solutions and contribute to cutting-edge projects.{' '}
              </p>
              <p className="py-2">
                When I am not busy coding or advocating for my clients, you can
                find me exploring nature or trying out different cuisines with
                my friends. And if you need a good laugh, I won't deny that I
                have a bit of a meme addiction. Life is already chaotic enough,
                so let's embrace the mess and enjoy the ride!
              </p>
            </div>
            <div className="flex justify-center">
              <p style={{ display: 'flex' }}>
                <a href="https://github.com/ahmad-saleem-23" target="_blank">
                  <img
                    src="./images/icons8-github-50.png"
                    alt="github"
                    className="h-35 w-35"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/ahmad-ismail-saleem-4285281a6/ "
                  target="_blank"
                >
                  <img
                    src="./images/icons8-linked-in-50.png"
                    alt="linkedin"
                    className="h-35 w-35"
                  />
                </a>
                <a href="/images/Ahmed Saleem CV.pdf" target="_blank">
                  <img
                    src="./images/icons8-cv-50.png"
                    alt="CV"
                    className="h-35 w-35"
                  />
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="w-full lg:w-1/2"
          >
            <div className="flex justify-center">
              <img
                src="./images/362885418_996708675096235_2649645303496825253_n.jpg"
                alt="self-image"
                className="rounded-2xl"
                style={{ width: '86%' }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default SectionWrapper(AboutMe, 'aboutMe')
