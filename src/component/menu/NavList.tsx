import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useDimensions } from './use-dimentions'
import { MenuToggle } from './MenueToggle'
import { Navigation } from './Navigation'
import { useGlobalState, toggleOpen } from '../../reducers/nav'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at calc(100% - 40px) 40px)',
    transition: {
      duration: 0.2, 
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const NavList = () => {
  const [state, dispatch] = useGlobalState() 

  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(containerRef)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        state.isOpen 
      ) {
        dispatch(toggleOpen()) 
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [dispatch, containerRef, state.isOpen])

  return (
    <motion.nav
      initial={false}
      animate={state.isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      {state.isOpen && <Navigation />}{' '}
      <MenuToggle toggle={() => dispatch(toggleOpen())} />
    </motion.nav>
  )
}
