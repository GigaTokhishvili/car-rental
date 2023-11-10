import React from 'react';
import TopBanner from '../../components/TopBanner';
import AddInfo from '../../components/AddInfo';
import Couple from '../../assets/about-couple.jpg';
import '../about/About.css'
import Book from '../../components/Book';

function About(props) {
  return (
    <>
      <TopBanner pageName={'About'} />
        <div className='about-main container'>
          <h1>About Company</h1>
          <div className='about-main-child'>
            <img src={Couple} alt="" />
            <div className='about-main-text'>
              <h3>You start the engine and your adventure begins</h3>
              <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
              <div className='about-icons'>
                <h5 className='about-h'><div><span>20</span> Car Types</div></h5>
                <h5 className="about-h"><div><span>85</span>Rental Outlets</div></h5>
                <h5 className="about-h"><div><span>75</span> Repair <br />Shops</div></h5>
              </div>
            </div>
          </div>
        </div>
      <AddInfo />
      <Book />
    </>

  )
}

export default About