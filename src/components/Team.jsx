import React from 'react'
import './Team.css'


function Team({ member, name, position }) {
  return (
    <>
        <img 
        src={member} 
        alt="team member image" />
        <div className="our-box-bottom">
            <h4>{name}</h4>
            <p>{position}</p>
        </div>
    </>
  )
}

export default Team