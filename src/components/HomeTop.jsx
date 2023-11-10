import homeTown from '../assets/home-town.png'
import homeCar from '../assets/home-car.png';
import React from 'react'
import { Link } from 'react-router-dom';

function HomeTop({ formRef, }) {
  return (
    <section className="home container">
        <img src={homeTown} alt="" className="background-town" />
        <div className="home-text">
            <h4 className="home-h4">Plan your trip now</h4>
            <h1 className='home-h1'>Save <span>big</span> with our car rental</h1>
            <p className='home-p'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className="home-buttons">
                <button className="book-ride main-button" onClick={() => formRef()}>
                    Book Ride
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-circle-check"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>
                </button>
                <Link to={'/about'} className="learn-more main-button">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6"></path></svg>
                </Link>
            </div>
        </div>
        <img src={homeCar} alt="" className="background-car" />
</section>
  )
}

export default HomeTop