import React from 'react'
import TopBanner from '../../components/TopBanner'
import Book from '../../components/Book'
import CarPreviews from '../../components/CarPreviews'
import Models from '../../components/Models'
import { nanoid } from 'nanoid'

const VEHICLEMODELS = [
  {carName: 'Audi A1',
  price: '$45',
  mark: 'Audi',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel'
  },
  {carName: 'Golf 6',
  price: '$37',
  mark: 'VW',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel'
  },
  {carName: 'Toyota',
  price: '$45',
  mark: 'Audi',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel'
  },
  {carName: 'BMW 320',
  price: '$35',
  mark: 'ModernLine',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel'
  },
  {carName: 'Mercedes',
  price: '$50',
  mark: 'Benz GLK',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel'
  },
  {carName: 'VW Passat',
  price: '$25',
  mark: 'CC',
  doors: '4/5',
  transmission: 'Manual',
  fuel: 'Diesel'
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
          />
          )
        })}
    </div>
    <Book />
    </>
  )
}

export default VehicleModels