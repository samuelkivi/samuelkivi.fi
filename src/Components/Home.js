import React from 'react';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-scroll';
import './Components.css';

const Home = () => {
    return (
        <>
        <div className = "Home">
        <div className="TextHome">
            Hi, I am <div className = "Name">Samuel Kivi</div><br />
            I study computer sciences at University of Turku
                </div>
        <Link 
                activeClass="active"
                to="Aboutme"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                >
                    <ArrowDropDown />
                </Link>
        </div>
        </>
    )
}


export default Home;