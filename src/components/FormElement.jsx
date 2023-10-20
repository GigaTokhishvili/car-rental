import './FormElement.css'
import { nanoid } from 'nanoid';


function FormElement(props) {

    return (
        <div className='label-div'>
            <label htmlFor={props.labelFor}>    
                {props.labelName}
            </label>
            <select required defaultValue={props.options[0]} className='select' name="" id="">
                {props.options.map((item) => {
                    return (
                        <option disabled={item === props.options[0] ? true : false} key={nanoid()} value={item} >{item}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FormElement;