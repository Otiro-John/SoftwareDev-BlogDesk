import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import "./Add.css";

const AddBlog = () => {
  const titleRef = useRef("");
  const contentRef = useRef("");
  const navigate = useNavigate();

  const publishBlog = () => {
    const blogTitle = titleRef.current.value;
    const blogContent = contentRef.current.value;

    if (!blogTitle || !blogContent) {
      alert("Please fill in both fields!");
      return;
    }

    // Get existing blogs or create new array
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Add new blog
    savedBlogs.push({ title: blogTitle, content: blogContent });

    // Save updated blogs to localStorage
    localStorage.setItem("blogs", JSON.stringify(savedBlogs));
    //Alert user that the blog is already [published]
    alert("Blog alraedy Published")
    // Redirect to BlogList
    navigate("/BlogDetails/BlogList");
    
  };

  return (
    <div>
      <Navbar />
      <div className="editor-wrapper">
        <div className="editor">
          <h2>Create A Blog That Inspires Your Audience...</h2>
          <input type="text" placeholder="Title" ref={titleRef} />
          <br />
          <textarea placeholder="Write your inspiring Blog..." ref={contentRef}></textarea>
          <br />
          <button onClick={publishBlog}>Publish</button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
