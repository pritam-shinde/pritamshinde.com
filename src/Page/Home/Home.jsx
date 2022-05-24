import Helmet from "react-helmet"
import { AboutSec, Contact, Hero, Portfolio } from "./Sections/Sections"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <AboutSec />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home