import SectionWrapper from '../hoc/SectionWrapper'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github, linkedin, resume } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

interface WorkProps {
  // Define the props for the Work component here
}
const ProjectCard = ({ index, name, description, tags, image, link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}
const Work: React.FC<WorkProps> = (props) => {
  // Implement the Work component logic here

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px max-w-3xl leading-[30px"
        >
          The following projects are some of the projects I have worked on. I
          have worked on a many projects and below is a some of which i would
          like to showcase my skill and experiance through real-world example of
          my work.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Work, 'projects')
