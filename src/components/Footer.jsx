import React from 'react'
import '../components/Footer.css'

function Footer() {
  return (
    <section className='footer'>
    <div className="footer-section container">
        <div className="footer-section-box">
            <h1>CAR <span>Rental</span></h1>
            <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
            <a href="tel:123456789">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-phone-call"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path><path d="M15 7a2 2 0 0 1 2 2"></path><path d="M15 3a6 6 0 0 1 6 6"></path></svg> 
            (123) 456 789
            </a>
            <a href="mailto: carrental@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
            carrental@gmail.com
            </a>
        </div>
        <div className="footer-section-box">
            <h1>COMPANY</h1>
            <a href="#">New York</a>
            <a href="#">Careers</a>
            <a href="#">Mobile</a>
            <a href="#">Blog</a>
            <a href="#">How we work</a>
        </div>
        <div className="footer-section-box">
            <h1>WORKING HOURS</h1>
            <p>Mon - Fri: 9:00AM - 9:00PM</p>
            <p>Sat: 9:00AM - 19:00PM</p>
            <p>Sun: Closed</p>
        </div>
        <div className="footer-section-box">
            <h1>SUBSCRIPTION</h1>
            <p>Subscribe your Email address for latest news & updates.</p>
            <input type="mail" placeholder='Enter Email Address' />
            <button className="main-button">Submit</button>
        </div>
    </div>
</section>
  )
}

export default Footer