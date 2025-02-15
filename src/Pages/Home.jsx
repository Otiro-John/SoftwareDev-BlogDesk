import BlogSample from "../Components/BlogSample"
import Contact from "../Components/Contact"
import Hero from "../Components/Hero"
import Me from "../Components/Me"
import Navbar from "../Components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Me/>
        <BlogSample/>
        <Contact/>
    </div>
  )
}

export default Home