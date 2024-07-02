import './Home.css'
import RouteLink from '../../Header/RouteLink';
import { motion } from "framer-motion";


function Home() {
   const links = [
      { href: './', title: 'Home' },
      { href: './about', title: 'About Me' },
      { href: './projects', title: 'Projects' }
   ];
   return (
      <motion.div className="home"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>
         <section className="pt-2 container d-flex align-items-center flex-wrap gap-1">
            <div className="img-container align-self-start me-auto">
               <img src="./Images/as.webp" alt="Me" />
            </div>
            <div className="d-flex flex-column text-center text-white flex-grow-1">
               <h1 className="display-1">
                  Alina Pakamorytė
               </h1>
               <p className="display-6">Full-Stack Web Developer</p>
               <div className="bubble-wrapper d-flex justify-content-center gap-4">
                  {links.map((link, index) => (
                     < RouteLink component={'home'} key={index} href={link.href} title={link.title} />
                  ))}
               </div>
            </div>
            <div className="align-self-end bubble-content ms-auto"><p>
               Hello. I'm Alina, and I'm a full-stack web developer. In short, I graduated with a Bachelor's degree in Psychology in 2014, but on 2022 I transitioned to become a PHP Developer at the Baltic Institute of Technology.
            </p></div>
         </section>
      </motion.div>
   )
}

export default Home;
