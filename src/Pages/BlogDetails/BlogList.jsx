import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./BlogList.css";
import img from "../../Assets/blog.jpg";
import { useAuth } from "../Context/AuthContext";
const BlogList = () => {
  // Retrieve blogs from localStorage or use an empty array
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  //Add user profile to the blog posts
  const {user} = useAuth();
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="blog-container">
          <div className="title">Welcome To Your Favorite Blogs...<a href="/BlogDetails/AddBlog">Create one!</a></div>
          <div className="blogs">
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div key={index} className="blog">
                  <img src={img} alt="......" />
                  <h2>{blog.title}</h2>
                  <p>{blog.content.substring(0, 100)}...</p> {/* Show only first 100 characters */}
                  <button>
                    <Link to={`/view/${index}`}>View...</Link> {/* Link to ViewBlog */}
                  </button>
                  {user ? (
                    <>
                    <img src={user.photoURL} alt="..." id="img"/>
                    </>
                  ) : (<img src={img} alt="..." id="img"/>)}
                </div>
              ))
            ) : (
              <p>No blogs available. <a href="/BlogDetails/AddBlog">Create one!</a></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
