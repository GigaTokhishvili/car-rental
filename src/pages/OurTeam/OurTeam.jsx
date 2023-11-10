import React from 'react'
import './OurTeam.css'
import TopBanner from '../../components/TopBanner'
import Book from '../../components/Book'
import Team from '../../components/Team'
import { nanoid } from 'nanoid'


const OURTEAM = [
  {name: 'Simba',
  position: 'CEO'
  },
  {name: 'Baloo',
  position: 'Director'
  },
  {name: 'Jinie',
  position: 'Photographer'
  },
  {name: 'Terk',
  position: 'Car Detailist'
  },
  {name: 'Mickey',
  position: 'Mechanic'
  },
  {name: 'Elsa',
  position: 'Manager'
  }
]

function OurTeam(props) {
  return (
    <>
      <TopBanner pageName={'Our Team'} />
      <div className='our-team container'>
        {OURTEAM.map((item) =>{
          return (
            <div className='our-team-box ' key={nanoid()}>
            <Team
            name={item.name}
            position={item.position}
            />
            </div>
            )
          })}
      </div>
      <Book />
    </>
  )
}

export default OurTeam