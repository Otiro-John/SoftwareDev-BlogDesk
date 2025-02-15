import Contact from "../Components/Contact"
import Navbar from "../Components/Navbar"
import BlogList from "./BlogDetails/BlogList"

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BlogList/>
      <Contact/>
    </div>
  )
}

export default Blog