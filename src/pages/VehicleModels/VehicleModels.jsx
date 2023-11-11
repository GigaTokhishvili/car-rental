import React from 'react'
import TopBanner from '../../components/TopBanner'
import Book from '../../components/Book'
import Models from '../../components/Models'
import { nanoid } from 'nanoid'
import AudiA1 from '../../assets/audia1.png'
import GolfF6 from '../../assets/golf6.png'
import Toyota from '../../assets/toyota.png'
import BMW320 from '../../assets/bmw320.png'
import Mercedes from '../../assets/mercedes.png'
import VwPassat from '../../assets/vwpassat.png'

const VEHICLEMODELS = [
  {carName: 'Audi A1',
  price: '$45',
  mark: 'Audi',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel',
  carImg: AudiA1,
  },
  {carName: 'Golf 6',
  price: '$37',
  mark: 'VW',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel',
  carImg: GolfF6,
  },
  {carName: 'Toyota',
  price: '$45',
  mark: 'Audi',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel',
  carImg: Toyota,
  },
  {carName: 'BMW 320',
  price: '$35',
  mark: 'ModernLine',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel',
  carImg: BMW320,
  },
  {carName: 'Mercedes',
  price: '$50',
  mark: 'Benz GLK',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel',
  carImg: Mercedes,
  },
  {carName: 'VW Passat',
  price: '$25',
  mark: 'CC',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel',
  carImg: VwPassat,
  }
]

function VehicleModels() {
  return (
    <>
    <TopBanner pageName={'Vehicle Models'} />
    <div className='vehicle-box container'>
      {VEHICLEMODELS.map((item) =>{
        return (
          <Models 
          carName={item.carName}
          key={nanoid()}
          price={item.price}
          mark={item.mark}
          doors={item.doors}
          transmission={item.transmission}
          fuel={item.fuel}
          carImg={item.carImg}
          />
          )
        })}
    </div>
    <Book />
    </>
  )
}

export default VehicleModels