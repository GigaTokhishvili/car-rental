import { useState } from 'react';
import './FormElement.css'
import { nanoid } from 'nanoid';



function FormElement(props) {
    const selectedValue = props.values.find(item => item.id === props.labelFor);

    function handleChange(e) {
        props.getValue(props.labelFor, e.target.value);
    }

    function handleClick (e) {
        e.preventDefault();
        props.showDiv();
    }

    return (
        <>
        {props.regularInput && 
        <div className='label-div'>
            <label htmlFor={props.labelFor} className='book-label'>    
               <i className={props.icon}></i> {props.labelName}
            </label>
            <select onChange={handleChange} value={selectedValue ? selectedValue.value : props.options[0]} className='select' name="" id={props.labelFor}>

                {props.options.map((item) => {
                    return (
                        <option disabled={item === props.options[0] ? true : false} key={nanoid()} value={item}>{item}</option>
                        )
                    })}
            </select>
        </div>}

        {!props.regularInput && 
        <>
            <div className='label-div'> 
                <label htmlFor={props.labelFor} className='book-label'>
                    <i className={props.icon} ></i> {props.labelName}
                </label>
                <input onChange={handleChange} type="date" id={props.labelFor} className='select' value={selectedValue ? selectedValue.value : props.options[0]}/>
            </div>
        </>
        }
        {props.labelFor === 'Drop-Off-Time' && <button className="main-button book-btn" type='submit' onClick={handleClick}>Search</button>}
        </>
    )
}

export default FormElement;