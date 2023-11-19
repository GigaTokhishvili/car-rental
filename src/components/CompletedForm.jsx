import './CompletedForm.css';
import { nanoid } from 'nanoid';
import AudiA1SLine from '../assets/AudiA1SLine.jpg'
import VWGolf6 from '../assets/VWGolf6.jpg'
import ToyotaCamry from '../assets/ToyotaCamry.jpg'
import BMW320ModernLine from '../assets/BMW320ModernLine.jpg'
import MercedesBenzGLK from '../assets/MercedesBenzGLK.jpg'
import VWPassatCC from '../assets/VWPassatCC.jpg'

export default function CompletedForm(props) {

    const COMPIMGS = [ AudiA1SLine, VWGolf6, ToyotaCamry, BMW320ModernLine, MercedesBenzGLK, VWPassatCC ]

    function handleClick() {
        props.closeBtn();
        props.showNotice();
    }

    return (
        <section className='completed-section' onClick={handleClick}>
            <div className="completed-form" onClick={e => e.stopPropagation()}>
                <div className="completed-form-header">
                    <h1>COMPLETE RESERVATION</h1>
                    <svg onClick={() => props.closeBtn()} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                </div>
                <div className='completed-form-warning'>
                    <div>      
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                    <h3>Upon completing this reservation enquiry, you will receive:</h3>
                    </div>
                    <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
                </div>
                <div className="completed-form-data">
                    <div className='info-car'>
                    <h5>location & date</h5>
                    {props.values.map((item) => {
                        return (
                            item.id !== 'carType' && 
                            <div key={nanoid()} className='comp-form-data-info'>
                                <div className='info-car-header'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-pin-filled"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>  
                                    <div>
                                    <h1>{item.id}</h1>
                                    <p>{item.value}</p>
                                    </div>
                                </div>
                            </div >
                        )
                    })}
                    </div>
                    <div className='info-car'>
                        {props.values.map((item) => {
                            const imgLink = item.value.split(' ').join(''); 
                            return (
                                item.id === 'carType' && 
                                <div key={nanoid()} className='comp-form-data-info'>
                                    <div className='info-car-header'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-pin-filled"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>
                                        <h1 className='car-mark'><span className='car-text'>Car - </span>{item.value}</h1>
                                    </div>
                                        {COMPIMGS.map((carItem) => {
                                            const carSrc = carItem.split('-');
                                            return (
                                                <div  key={nanoid()}>
                                                {`/assets/${props.values[0].value.split(' ').join('')}` === carSrc && <img className='car-img' src={carItem} alt="" />}
                                                </div>
                                            )
                                        })}
                                    
                                </div >
                            )
                    })}
                    </div>
                </div>
                <div className="comp-form" >
                    <h2>Personal Information</h2>
                    <form className='comp-form-info' action="">
                        <div className="comp-form-info-data">
                            <div className="comp-form-info-2row">
                                <label htmlFor="name">First Name</label>
                                <input type="text" placeholder='Enter Your First name'/>
                            </div>
                            <div className="comp-form-info-2row">
                                <label htmlFor="name">Last Name</label>
                                <input type="text" placeholder='Enter Your Last name'/>
                            </div>
                        </div>
                        <div className="comp-form-info-data">
                            <div className="comp-form-info-2row">
                                <label htmlFor="name">Phone Number </label>
                                <input type="text" placeholder='Enter Your Phone Number'/>
                            </div>
                            <div className="comp-form-info-2row">
                                <label htmlFor="name">Age</label>
                                <input type="number" placeholder='Enter Your Age'/>
                            </div>
                        </div>
                        <div className="comp-form-info">
                            <div className="comp-form-info-1row">
                                <label htmlFor="">Email</label>
                                <input type="mail" placeholder='Enter your email address' />
                            </div>
                            <div className="comp-form-info-1row">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder='Enter your street address' />
                            </div>
                        <div className="comp-form-info-data">
                            <div className="comp-form-info-2row">
                                <label htmlFor="name">City</label>
                                <input type="text" placeholder='Enter Your City'/>
                            </div>
                            <div className="comp-form-info-2row">
                                <label htmlFor="name">Zip Code</label>
                                <input type="text" placeholder='Enter Your Zip Code'/>
                            </div>
                        </div>
                        </div>
                        <div className='some-data'>
                            <div className='some-data-info'>
                                <input type="checkbox" />
                                <p>Please send me latest news and updates</p>
                            </div>
                        </div>
                        <div className='reserve'>
                            <button type='submit' onClick={handleClick}>Reserve Now</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </section>
    )

    
}