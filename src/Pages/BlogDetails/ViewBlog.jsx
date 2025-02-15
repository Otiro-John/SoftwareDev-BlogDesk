import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./ViewBlog.css";

const ViewBlog = () => {
  const { id } = useParams(); // Get blog ID from URL
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const selectedBlog = savedBlogs[id]; // Get blog by ID

    if (selectedBlog) {
      setBlog(selectedBlog);
    } else {
      navigate("/"); // Redirect to BlogList if blog not found
    }
  }, [id, navigate]);

  const deleteBlog = () => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    savedBlogs.splice(id, 1); // Remove blog from array
    localStorage.setItem("blogs", JSON.stringify(savedBlogs)); // Save new list
    alert("Blog deleted!");
    navigate("/"); // Redirect to BlogList
  };

  return (
    <div>
      <Navbar />
      <div className="view-wrapper">
        {blog ? (
          <div className="view">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <div className="buttons">
              <button>Like</button>
              <button>Share</button>
              <button onClick={deleteBlog}>Delete</button>
            </div>
          </div>
        ) : (
          <p>Loading blog...</p>
        )}
      </div>
    </div>
  );
};

export default ViewBlog;
