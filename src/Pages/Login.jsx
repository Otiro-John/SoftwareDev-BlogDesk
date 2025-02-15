import { useAuth } from './Context/AuthContext'
import './Login.css'
import google from '../Assets/googleLogo.png'

const Login = () => {
    const { user, signInWithGoogle, logout } = useAuth();
  return (
    <div className='create-account-container'>
        {user ? (
        <div className='profile'>
          <img src={user.photoURL} alt="Profile" width="50" />
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
          <button onClick={logout}>Logout</button>
          <br />
          <button><a href="/">Go back to Home...</a></button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}><img src={google} alt="logo" />Sign in with Google</button>
      )}
    </div>
  )
}

export default Login