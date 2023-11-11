import { useState, useRef, useEffect } from 'react';
import './Home.css';
import FormElement from '../../components/FormElement.jsx';
import { nanoid } from 'nanoid';
import CompletedForm from '../../components/CompletedForm';
import CarPreviews from '../../components/CarPreviews';
import AddInfo from '../../components/AddInfo';
import Review from '../../components/Review';
import HomeTop from '../../components/HomeTop';
import HomeDownload from '../../components/HomeDownload';
import HomeFaq from '../../components/HomeFaq';
import HomeChoice from '../../components/HomeChoice';
import HomeBanner from '../../components/HomeBanner';
import AudiA1SLine from '../../assets/AudiA1SLine.jpg'
import VWGolf6 from '../../assets/VWGolf6.jpg'
import ToyotaCamry from '../../assets/ToyotaCamry.jpg'
import BMW320ModernLine from '../../assets/BMW320ModernLine.jpg'
import MercedesBenzGLK from '../../assets/MercedesBenzGLK.jpg'
import VWPassatCC from '../../assets/VWPassatCC.jpg'




const FORMLABEL = [
    {labelName: 'Select Your Car Type',
    regularInput: true,
    htmlSelect: 'carType',
    icon: 'fa-solid fa-car-side',
    options: ['Select your car', 'Audi A1 S Line', 'VW Golf 6', 'Toyota Camry', 'BMW 320 ModernLine', 'Mercedes Benz GLK', 'VW Passat CC'],
    carImgs: [ AudiA1SLine, VWGolf6, ToyotaCamry, BMW320ModernLine, MercedesBenzGLK, VWPassatCC ],
    },

    {labelName: 'Pick Up City',
    regularInput: true,
    htmlSelect: 'Pick-Up-City',
    icon: "fa-solid fa-location-dot",
    options: ['Select pick up location', 'Tbilisi', 'Kutaisi', 'Poti', 'Batumi', 'Sokhumi']
    },

    {labelName: 'Drop Off City',
    regularInput: true,
    htmlSelect: 'Drop-Off-City',
    icon: "fa-solid fa-location-dot",
    options: ['Select pick up location', 'Tbilisi', 'Kutaisi', 'Poti', 'Batumi', 'Sokhumi']
    },

    {labelName: 'Pick Up Time',
    regularInput: false,
    htmlSelect: 'Pick-Up-Time',
    icon: "fa-regular fa-calendar",
    options: []
    },

    {labelName: 'Drop Off Time',
    regularInput: false,
    htmlSelect: 'Drop-Off-Time',
    icon: "fa-regular fa-calendar",
    options: []
    },
]


const CARINFO = [
    {carName: 'AudiA1SLine',
    carInfo: ['Model', 'Mark', 'Year', 'Doors', 'AC', 'Transmission', 'Fuel'],
    carData: ['Audi', 'A1', '2012', '4/5', 'Yes', 'Manual', 'Gasoline'],
    price: '$45'          
    }, 
    {carName: 'VWPassatCC',
    carInfo: ['Model', 'Mark', 'Year', 'Doors', 'AC', 'Transmission', 'Fuel'],
    carData: ['Golf 6', 'Volkswagen', '2008', '4/5', 'Yes', 'Manual', 'Diesel'],
    price: '$37'          
    },
    {carName: 'VWGolf6',
    carInfo: ['Model', 'Mark', 'Year', 'Doors', 'AC', 'Transmission', 'Fuel'],
    carData: ['Camry', 'Toyota', '2006', '4/5', 'Yes', 'Automatic', 'Hybrid'],
    price: '$30'
    }, 
    {carName:'ToyotaCamry',
    carInfo: ['Model', 'Mark', 'Year', 'Doors', 'AC', 'Transmission', 'Fuel'],
    carData: ['320', 'BMW', '2012', '4/5', 'Yes', 'Manual', 'Diesel'],          
    price: '$35'
    },
    {carName: 'MercedesBenzGLK',
    carInfo: ['Model', 'Mark', 'Year', 'Doors', 'AC', 'Transmission', 'Fuel'],
    carData: ['Benz GLK', 'Mercedes', '2006', '4/5', 'Yes', 'Manual', 'Diesel'],          
    price: '$50'
    },
    {carName: 'BMW320ModernLine',
    carInfo: ['Model', 'Mark', 'Year', 'Doors', 'AC', 'Transmission', 'Fuel'],
    carData: ['Passat CC', 'Volkswagen', '2008', '4/5', 'Yes', 'Automatic', 'Gasoline'],          
    price: '$25'
    }
]


function ParentSection(props) {
    const [showDiv, setShowDiv] = useState(false);
    const [values, setValues] = useState([]);
    const [formError, setFormError] = useState(false);
    const [compNotice, setCompNotice] = useState(false);
    const [carInfo, setCarInfo] = useState('Audi A1 S Line');
    const [scrollDistance, setScrollDistance] = useState(0)

    const formRef = useRef(null);

    showDiv ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

    function handleGetValue(id, newValue) {
        const existingItem = values.find(item => item.id === id);
    
        if (existingItem) {
            const updatedValues = values.map(item => {
                if (item.id === id) {
                    return { ...item, value: newValue };
                }
                return item;
            });
            setValues(updatedValues);
        } else {
            const updatedValues = [...values, { id, value: newValue }];
            setValues(updatedValues);
        }
    }

    function handleSubmit() {
        values.length === 5 ? setShowDiv(true) : setFormError(true);
    }
    
    function removeError() {
        setFormError(false);
    }

    function removeNotice() {
        setCompNotice(false);
    }

    function callBackImg(ab) {
        setCarInfo(ab);
    }

    function handleFormRef () {
        formRef.current.scrollIntoView( {behavior: 'smooth', block: 'center'})
    }
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollDistance(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return(
        <>
            {scrollDistance >= 700 && <div onClick={() => scrollTo({top: 0, behavior: 'smooth'})} className='scroll-up'>
                <svg xmlns="http://www.w3.org/2000/svg" height="4rem" viewBox="0 0 448 512" fill='white'><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>
            </div>}
            <HomeTop formRef={handleFormRef} />

            {/* book a car form section */}
            <section ref={formRef} className="book-content container">
                <h2>Book a car</h2>
                {formError && <div className='form-error' ><h3>All Fields Required !</h3> 
                <svg onClick={removeError} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                
                </div>}

                {compNotice && <div className='email-check' ><h3>Check your email to confirm an order.</h3> 
                <svg onClick={removeNotice} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                
                </div>}
                <form className='box-form'>
                        {FORMLABEL.map((item) => {
                            return (
                                <FormElement 
                                icon={item.icon}
                                labelName={item.labelName}
                                key={nanoid()} 
                                labelFor={item.htmlSelect}  
                                options={item.options}
                                getValue={handleGetValue}
                                values={values}
                                regularInput={item.regularInput}
                                showDiv={handleSubmit}
                                />)
                            })}

                </form>
            </section>

            {/* book form's completed form */}
            {showDiv && <CompletedForm closeBtn={() => setShowDiv(false)}
                showNotice={() => {
                    setCompNotice(true); 
                    setFormError(false);
                }}
                values={values}           
            />}   

            <AddInfo />

            {/* car preview section */}
            <section className="car-preview container">
                <div className="car-preview-text">
                    <h2>Vehicle Models</h2>
                    <h3>Our rental fleet</h3>
                    <p className='car-preview-text'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                </div>
                <div className='car-pre-parent'>
                    <div className='car-pre-box'>
                    {FORMLABEL[0].options.slice(1).map((item) => {
                        return (
                            <CarPreviews 
                            carName={item}
                            key={nanoid()}
                            imgLink={callBackImg}
                            className={item === carInfo ? 'colored-button' : ''}
                            />     
                            )
                        })}
                    </div>
                    <div className='car-img' >
                        <div className='car-img-parent'>
                        {FORMLABEL[0].carImgs.map((item) => {
                            return(
                                <div key={nanoid()}>
                                {item === `/src/assets/${carInfo.split(' ').join('')}.jpg` && <img src={item} alt="" />}
                                </div>
                            )
                        })}
                        </div>
                        <div className='car-info'>
                            <div className='main-car-data'>
                                {CARINFO.map((item) => {
                                    return (
                                        carInfo.split(' ').join('') === item.carName  &&
                                        <div key={nanoid()} className='main-car-info'>
                                            <div className='car-data-header'>{item.price} / Rent per day</div>
                                            <div className='car-datas-box'>
                                                <div className='carinfo-data'>
                                                {item.carInfo.map((item) => {
                                                        return (
                                                            <div key={nanoid()}>
                                                                {item}
                                                            </div>
                                                        )
                                                    })} 
                                                </div>
                                                <div className='cardata-data'>
                                                    {item.carData.map((item) => {
                                                        return ( 
                                                        <div key={nanoid()}>
                                                            {item}
                                                        </div>
                                                    )})}
                                                </div>
                                            </div>
                                        </div> 
                                    )
                                })}
                            </div>
                            <button className='main-button' onClick={() => formRef.current.scrollIntoView({behavior: 'smooth', block: 'center'})}>Reserve now</button>
                        </div>
                    </div>    
                </div>
            </section>

            <HomeBanner />
            <HomeChoice />
            <Review />
            <HomeFaq />
            <HomeDownload />
        </>
    )
}

export default ParentSection;