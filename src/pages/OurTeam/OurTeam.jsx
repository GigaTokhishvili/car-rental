import React from 'react'
import './OurTeam.css'
import TopBanner from '../../components/TopBanner'
import Book from '../../components/Book'
import Team from '../../components/Team'
import { nanoid } from 'nanoid'
import Simba from '../../assets/simba.jpg'
import Baloo from '../../assets/baloo.jpg'
import Genie from '../../assets/jinie.jpg'
import Terk from '../../assets/terk.jpg'
import Mickey from '../../assets/mickey.jpg'
import Elsa from '../../assets/elsa.jpg'


const OURTEAM = [
  {name: 'Simba',
  position: 'CEO',
  member: Simba,
  },
  {name: 'Baloo',
  position: 'Director',
  member: Baloo,

  },
  {name: 'Genie',
  position: 'Photographer',
  member: Genie,
  },
  {name: 'Terk',
  position: 'Car Detailist',
  member: Terk,
  },    
  {name: 'Mickey',
  position: 'Mechanic',
  member: Mickey,
  },
  {name: 'Elsa',
  position: 'Manager',
  member: Elsa,
  }
]

function OurTeam() {
  return (
    <>
      <TopBanner pageName={'Our Team'} />
      <div className='our-team container'>
        {OURTEAM.map(({ name, position, member }) =>{
          return (
            <div className='our-team-box ' key={nanoid()}>
            <Team
            name={name}
            position={position}
            member={member}
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