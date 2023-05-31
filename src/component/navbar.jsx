import '../styles/navbar.css'
import techtimelogo  from '../asssest/techtimelogo.svg';
import { FaTimes, FaBars } from "react-icons/fa"
import { useState } from 'react';

const Navbar = () => {
    const [shownav, setShowNav] = useState(false)
    const handleClick = () => {
        setShowNav(!shownav)
    }
    return (
        <header>
            <nav>
                <img src={techtimelogo} alt='techtimelogo'/>
                <div className={shownav ? "nav-content active" :  "nav-content"}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Testimonial</li>
                    <li>Community</li>
                    <button className='btn-enroll'>Enroll Now</button>
                </div>
                <div className='hamburger'>
                    {shownav ? <FaTimes onClick={handleClick} size={25} /> : <FaBars onClick={handleClick} size={25} />}
                </div>
            </nav>
        </header>
    )
}
export default Navbar;