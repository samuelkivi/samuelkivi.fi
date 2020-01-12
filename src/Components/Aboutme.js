import React from 'react';
import './Components.css';
import me from './Media/me.png';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-scroll';

//<img className="github" src={me} alt="Samuel"></img>
/**
 <div className = "TextAboutme">
                About me              
            </div>
*/

const Aboutme = () => {
    return (
        <div className = "Aboutme">
            <div className = "Item1">
                <div className = "Headers">About me</div>
                <img className="Picture" src={me} alt="Samuel" />
                <div className = "Texts">
                <li>I am 21 years old</li>
                <li>I started studying in 2018</li>
                <li>In free time I like to play floorball</li>
                <li>Also I like to do my own projects</li>
                
                </div>
                
            </div>
            
            <Link 
                activeClass="active"
                to="Contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                >
                    <ArrowDropDown />
                </Link>
        </div>
        
    )
}



export default Aboutme;
