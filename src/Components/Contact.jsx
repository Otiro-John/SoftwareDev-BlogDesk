import './Contact.css'
import Footer from './Footer'
const Contact = () => {
  return (
    <div>
     <div className='contact-container'>
     <div className="title">Contact Us</div>
     <div className="contact-info">
        <div className="contact-info-item">
        <i className="fa fa-phone"></i>
        <span>+254 796956137</span>
        </div>
        <div className="contact-info-item">
        <i className="fa fa-envelope"></i>
        <span>john123@gmail.com</span>
        </div>
        <div className="contact-info-item">
        <i className="fa fa-map-marker"></i>
        <span>Nairobi</span>
        </div>
     </div>
    </div>
    <Footer/>
    </div>
   
  )
}

export default Contact