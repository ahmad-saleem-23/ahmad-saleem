import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const colors = ['#010101', '#010101', '#010101', '#010101', '#010101','#010101']
const list = ['Home', 'About Me', 'Experience', 'Tech', 'Peojects','Contacts']
const listLink = ['#', '#aboutMe', '#work', '#tech', '#projects','#contacts']

interface Props {
  i: number
}

export const MenuItem = ({ i }: Props) => {
  const style = { border: `2px solid ${colors[i]}` }

  return (
    // <Link to={`${listLink[i]}`}>
    <a href={`${listLink[i]}`}>
      <motion.li
        className="navLi"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-placeholder" style={style}>
          {list[i]}
        </div>
        {/* <div className="icon-placeholder" style={style} /> */}
      </motion.li>
      {/* </Link> */}
    </a>
  )
}
