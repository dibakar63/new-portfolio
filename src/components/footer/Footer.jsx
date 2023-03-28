import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_container container'>
            <h3 className='footer_title'>Dibakar</h3>

            <ul className='footer_list'>
                <li>
                    <a href="#about" className='footer_link'>About</a>
                </li>
                <li>
                <a href="#projects" className='footer_link'>Projects</a>
                </li>
                <li>
                <a href="#testimonals" className='footer_link'>Testimonals</a>
                </li>
            </ul>

            <div className='footer_social'>
            <a href="https://www.facebook.com/crhistiano.ronaldo.315" className='footer_social-icon' target="_blank">
            <i class="bx bxl-facebook"></i>
        </a>
         
        <a href="https://www.instagram.com/dibakar63/" className='footer_social-icon' target="_blank">
            <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://twitter.com/dibakar63" className='footer_social-icon' target="_blank">
            <i class="bx bxl-twitter"></i>
        </a>
            </div>

            <span className='footer_copy'>&#169; Deycoder. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
