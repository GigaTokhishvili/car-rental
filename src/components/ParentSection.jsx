import './ParentSection.css'
import homeCar from '../assets/home-car.png'
import homeTown from '../assets/home-town.png'
import bookContent from '../assets/book-content.png'
import FormElement from './FormElement.jsx';
import { nanoid } from 'nanoid';


// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path></svg> 


const FORMLABEL = [
    {labelName: 'Select Your Car Type', 
    htmlSelect: 'carType',
    options: ['Select your car', 'Audi A1 S-Line', 'VW Golf 6', 'Toyota Camry', 'BMW 320 ,ModernLine', 'Mercedes-Benz GLK', 'VW Passat CC'],
    },

    {labelName: 'Pick Up City',
    htmlSelect: 'Pick-Up-City',
    options: ['Select pick up location', 'Tbilisi', 'Kutaisi', 'Poti', 'Batumi', 'Sokhumi']
    },

    {labelName: 'Drop Off City',
    htmlSelect: 'Drop-Off-City',
    options: ['Select pick up location', 'Tbilisi', 'Kutaisi', 'Poti', 'Batumi', 'Sokhumi']
    }
]




function ParentSection() {
    return(
        <>
            <section className="home">
                    <img src={homeTown} alt="" className="background-town" />
                    <div className="home-text">
                        <h4 className="home-h4">Plan your trip now</h4>
                        <h1 className='home-h1'>Save <span>big</span> with our car rental</h1>
                        <p className='home-p'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                        <div className="home-buttons">
                            <button className="book-ride main-button">
                                Book Ride
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-circle-check"><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>
                                </button>
                            <button className="learn-more main-button">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6"></path></svg>
                                </button>
                        </div>
                    </div>
                    <img src={homeCar} alt="" className="background-car" />
            </section>

            <section className="book-content">
                <h2>Book a car</h2>
                <form className='box-form'>
                    {/* <div className='form-div'> */}
                        {FORMLABEL.map((item) => {
                            return (
                                <FormElement 
                                labelName={item.labelName} 
                                key={nanoid()} 
                                labelFor={item.htmlSelect}  
                                options={item.options} />)
                            })}
                    {/* </div>                   */}
                            <div className='label-div'> 
                                <label htmlFor="pick-date">Pick Up Date</label>
                                <input type="date" id='pick-date' />
                            </div>
                            <div className='label-div'>
                                <label htmlFor="drop-date">Drop Off Date</label>
                                <input type="date" id='drop-date'/>
                            </div>
                            <button className="main-button" type='submit'>Search</button>

                </form>
            </section>
        </>
    )
}

export default ParentSection;