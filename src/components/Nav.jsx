import './Nav.css';
import NavLi from './NavLi';
import navLogo from '../assets/nav-logo.png'
import { nanoid } from 'nanoid';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NAVNAME = [
    'Home', 'About', 'Vehicle Models', 'Testimonials', 'Our Team', 'Contact'
]


function Header(props) {
    const [mobile, setMobile] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="nav-parent">
            <nav className='header container text-gray-'>
                <div className={` ${mobile && 'open-mobile-nav'} mobile-navbar`}>
                    <div onClick={() => setMobile(false)} className="close-mobile-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
                    </div>
                    <ul onClick={() => setMobile(false)} className='mobile-ul'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/vehiclemodels'>Models</Link></li>
                        <li><Link to='/testimonials'>Testimonials</Link></li>
                        <li><Link to='/ourteam'>Our Team</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                
                <a href="#">
                    <img onClick={() => navigate('/')} src={navLogo} alt="Company Logo" />
                </a>
                <div onClick={() => setMobile(true)} className="mobile-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-menu-2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
                </div>
                <ul>
                    {NAVNAME.map((item) => {
                        return (
                        <NavLi liName={item} key={nanoid()} />)
                    })}
                </ul>
                <div className="users">
                    <button className="sign-in">Sign In</button>
                    <button className="register main-button">Register</button>
                </div>
            </nav>
        </div>
    )
}

export default Header;