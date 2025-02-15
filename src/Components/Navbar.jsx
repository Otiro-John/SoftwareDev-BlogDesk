import { useAuth } from "../Pages/Context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function

  return (
    <div className="navigation">
      <div className="logo">LOGO</div>
      <div className="links">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/BlogDetails/BlogList">Blog</a></li>
            <li><a href="/ContactUs">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="btn">
        {user ? (
          <>
            <button>
              <a href="#">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"} // Default image if null
                  alt="Profile"
                  className="profile-img"
                />
              </a>
            </button>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button><a href="/Login">SignUp</a></button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
