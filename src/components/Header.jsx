import './Header.css';
import NavLi from './NavLi';
import navLogo from '../assets/nav-logo.png'

const NAVNAME = [
    'Home', 'About', 'Vehicle Models', 'Testimonials', 'Our Team', 'Contact'
]


function Header(props) {
    return (
        <div className="nav-parent">
            <nav className='header'>
                <a href="#">
                    <img src={navLogo} alt="Company Logo" />
                </a>
                <ul>
                    {NAVNAME.map((item) => {
                        return (
                        <NavLi liName={item} />)
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