import React from 'react'
import './Team.css'


function Team(props) {
  return (
    <>
        <img 
        src={`src/assets/${props.name.toLowerCase()}.jpg`} 
        alt="team member image" />
        <div className="our-box-bottom">
            <h4>{props.name}</h4>
            <p>{props.position}</p>
        </div>
    </>
  )
}

export default Team