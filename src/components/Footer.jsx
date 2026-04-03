import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>

      <div className="container">
        <div className="row">


          <div className="col-lg-4 col-md-6 mb-4">
            <h5>ABOUT HOMELAND</h5>
            <hr className='footer-line' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Saepe pariatur reprehenderit vero atque, consequatur id
              ratione, et non dignissimos culpa?
            </p>
          </div>

    
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>NAVIGATIONS</h5>
            <hr className='footer-line' />
            <div className="row">
              <div className="col-6">
                <ul className='footer-links'>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Buy</a></li>
                  <li><a href="#">Rent</a></li>
                  <li><a href="#">Properties</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className='footer-links'>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <h5>FOLLOW US</h5>
            <hr className='footer-line' />
            <div className='footer-icons'>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>
      </div>


      <div className="footer-bottom text-center">
        <p>Copyright &copy; 2026 All rights reserved.</p>
        <p>Made with ❤️ by Farzam Shahid.</p>
      </div>

    </footer>
  )
}

export default Footer