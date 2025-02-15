import './Me.css'
import me from '../Assets/me.jpg'
const Me = () => {
  return (
    <div className="wrapper">
    <div className='me-container'>
     <div className="img">
      <img src={me} alt=".Me Image" />
     </div>
     <div className="text">
      <h2>About Us</h2>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis iusto velit, 
      accusantium saepe ratione modi quod atque officia animi quasi dolor nulla esse, 
      libero sint fugiat obcaecati quas reprehenderit quae?
      </p>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis iusto velit, 
      accusantium saepe ratione modi quod atque officia animi quasi dolor nulla esse, 
      libero sint fugiat obcaecati quas reprehenderit quae?
      </p>
      <button><a href="#">Know More...</a></button>
     </div>
    </div>
    </div>
  )
}

export default Me