import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import Contact from '../components/Contact';
import Introduction from '../components/Introduction';
const Home = () => {
  return (
    <motion.div className="home" key="home"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroBanner />
      <Introduction />
      <Contact />
    </motion.div>
  )
}

export default Home