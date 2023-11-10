import { Link, useLocation } from 'react-router-dom';
import './NavLi.css';

function NavLi({ liName }) {
    const location = useLocation();
    // console.log(location)

    return (
        <li>
            <Link 
                to={liName === 'Home' ? '/' : liName.split(' ').join('').toLowerCase()}
                className={location.pathname === '/' && liName === 'Home' || location.pathname === `/${liName.split(' ').join('').toLowerCase()}` ? 'red-color' : null}
            >
                {liName}
            </Link>
        </li>
    )
}

export default NavLi;