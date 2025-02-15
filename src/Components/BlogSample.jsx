import './Blog.css'
import img from '../Assets/me.jpg'
const BlogSample = () => {
  return (
    <div className="wrapper">
    <div className='blog-container'>
       <div className="title">Top Blog Posts</div>
       <div className="blogs">
        <div className="blog">
            <img src={img} alt="blogA" />
            <h2>AI TRENDS...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et sapiente, exercitationem repellat autem ipsa error? Porro eaque natus vero blanditiis... 
             </p>
             <button><a href="#">Read...</a></button>
        </div>

        <div className="blog">
            <img src={img} alt="blogA" />
            <h2>AI TRENDS...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et sapiente, exercitationem repellat autem ipsa error? Porro eaque natus vero blanditiis... 
             </p>
             <button><a href="#">Read...</a></button>
        </div>

        <div className="blog">
            <img src={img} alt="blogA" />
            <h2>AI TRENDS...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et sapiente, exercitationem repellat autem ipsa error? Porro eaque natus vero blanditiis... 
             </p>
             <button><a href="#">Read...</a></button>
        </div>

        <div className="blog">
            <img src={img} alt="blogA" />
            <h2>AI TRENDS...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et sapiente, exercitationem repellat autem ipsa error? Porro eaque natus vero blanditiis... 
             </p>
             <button><a href="#">Read...</a></button>
        </div>

        <div className="blog">
            <img src={img} alt="blogA" />
            <h2>AI TRENDS...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et sapiente, exercitationem repellat autem ipsa error? Porro eaque natus vero blanditiis... 
             </p>
             <button><a href="#">Read...</a></button>
        </div>

        <div className="blog">
            <img src={img} alt="blogA" />
            <h2>AI TRENDS...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et sapiente, exercitationem repellat autem ipsa error? Porro eaque natus vero blanditiis... 
             </p>
             <button><a href="#">Read...</a></button>
        </div>
       </div>
    </div>
    </div>
  )
}

export default BlogSample