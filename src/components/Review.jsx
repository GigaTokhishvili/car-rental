import React from 'react'
import ron from '../assets/ron.jpg';
import harry from '../assets/harry.jpg';

function Review() {
  return (
    <section className='review'>
    <div className="container">
        <div className="review-section">
            <div className="review-top">
                <h4>Reviewed by People</h4>
                <h2>Client's Testimonials</h2>
                <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className="review-bottom">
                <div className="reviewers">
                    <div className="left-reviewer">
                        <span className='review-mark'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-quote"><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
                            </span>
                        <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
                        </p>
                        <div className="main-reviewer">
                            <div className="main-reviewer-box">
                            <img src={harry} alt="" />
                            <span>
                                <h4>Parry Hotter</h4>
                                <p>Tbilisi</p>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="right-reviewer">
                        <span className='review-mark'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-quote"><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
                        </span>
                            <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
                        <div className="main-reviewer">
                            <div className="main-reviewer-box">
                            <img src={ron} alt="" />
                            <span>
                                <h4>Ron Rizzly</h4>
                                <p>Kutaisi</p>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Review