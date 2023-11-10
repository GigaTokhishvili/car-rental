import React from 'react'
import '../components/TopBanner.css'
import { Link } from 'react-router-dom'

function TopBanner({pageName}) {
  return (
    <div className='top-banner'>
        <div className='top-bg'>
        </div>
        <div className='container '>
            <h1>{pageName}</h1>
            <p>
                <Link to='/' className='link'>Home</Link>
                / {pageName}
            </p>
        </div>
    </div>
  )
}

export default TopBanner