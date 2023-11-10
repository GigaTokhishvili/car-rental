import React, { useState } from 'react'

function HomeFaq() {
    const [active, setActive] = useState('fq-1')
    
    function handlActive(e) {
        setActive(e.target.id);
        e.target.id === active ? setActive('') : null;
        if ( e.target.tagName === 'path' || e.target.tagName === 'svg') {
            e.target.parentElement.id === active ? setActive('') : setActive(e.target.parentElement.id);
        }
    }

  return (
    <section className="faq">
        <div className="container">
            <div className="faq-section">
                <div className="faq-top">
                    <h5>FAQ</h5>
                    <h2>Frequently Asked Questions</h2>
                    <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
                </div>
                <div className="faq-bottom">
                    <div onClick={handlActive} className='faq-bottom-box'>
                        <div id='fq-1' className={active  === 'fq-1' ? 'faq-question active-question' : 'faq-question' }>
                            1. What is special about comparing rental car deals?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-down"><path d="M6 9l6 6l6 -6"></path></svg>
                        </div>
                        <div className={active === 'fq-1' ? "faq-answer active-answer" : 'faq-answer'}>
                        Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.
                        </div>
                    </div>
                    <div onClick={handlActive} className="faq-bottom-box">
                        <div id='fq-2' className={active === 'fq-2' ? ' faq-question active-question' : 'faq-question'}>
                            2. How do I find the car rental deals?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-down"><path d="M6 9l6 6l6 -6"></path></svg>
                        </div>
                        <div className={active === 'fq-2' ? "faq-answer active-answer" : 'faq-answer'}>
                            You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.
                        </div>
                    </div>
                    <div  onClick={handlActive} className="faq-bottom-box">
                        <div id='fq-3' className={active === 'fq-3' ? ' faq-question active-question' : 'faq-question'}>
                            3. How do I find such low rental car prices?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-down"><path d="M6 9l6 6l6 -6"></path></svg>
                        </div>
                        <div className={active === 'fq-3' ? "faq-answer active-answer" : 'faq-answer'}>
                            Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeFaq