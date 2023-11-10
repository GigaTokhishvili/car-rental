import React from 'react'

function HomeBook() {
  return (
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
  )
}

export default HomeBook