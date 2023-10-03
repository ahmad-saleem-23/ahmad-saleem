import SectionWrapper from '../hoc/SectionWrapper'
import Logo from './Logo'
import { Nav } from './menu/Nav'

function Heading() {
  return (
<div >
  <Logo />
  <Nav />
  </div>
  )
}
export default SectionWrapper(Heading, 'Heading')