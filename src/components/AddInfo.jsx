import React from 'react'
import addInfoCar from '../assets/add-info-carimg.png';
import addInfoMic from '../assets/add-info-micimg.png';
import addInfoVan from '../assets/add-info-vanimg.png';

function AddInfo() {
  return (
    <section className="add-info container">
        <div className="add-info-text">
            <h2>Plan your trip now</h2>
            <h3>Quick & easy car rental</h3>
        </div>
        <div className='add-info-main-box'>
            <div className="add-info-box">
                <img src={addInfoCar} alt="" />
                <h4>Select Car</h4>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
            <div className="add-info-box">
                <img src={addInfoMic} alt="" />
                <h4>Contact Operator</h4>
                <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
            </div>
            <div className="add-info-box">
                <img src={addInfoVan} alt="" />
                <h4>Let's Drive</h4>
                <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
            </div>
        </div>
    </section>
  )
}

export default AddInfo