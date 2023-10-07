
import SectionWrapper from '../hoc/SectionWrapper';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {github, linkedin, resume} from '../assets';
import { projects } from '../constants';
import { fadeIn,textVariant } from '../utils/motion';


interface WorkProps {
  // Define the props for the Work component here
}

const Work: React.FC<WorkProps> = (props) => {
  // Implement the Work component logic here

  return (
   <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>

   </>
  );
};

export default SectionWrapper (Work,'projects');
