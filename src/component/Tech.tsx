import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'
import BallCanvas from './canvas/Balls'

const Tach = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          </div>
      
      ))}
      </div>
  )
}

export default SectionWrapper(Tach, 'tech')