import './Home.css'

function Home() {
   return (
      <div className="pt-2 home container d-flex justify-content-end align-items-center flex-wrap">
         <img className="align-self-start" src="./Images/as.png" alt="Me" />
         <div className="d-flex flex-column text-center text-white flex-grow-1">
            <h1 className="display-1">
               Alina Pakamorytė
            </h1>
            <p className="display-6">Full-Stack Web Developer</p>
         </div>
         <div className="align-self-end bubble-content"><p>
            Hello. I'm Alina, and I'm a full-stack web developer. In short, I graduated with a Bachelor's degree in Psychology in 2014, but on 2022 I transitioned to become a PHP Developer at the Baltic Institute of Technology.
         </p></div>
      </div>
   )
}

export default Home;
