import React from 'react';
import './Components.css';
import Github from './Media/githublogo.png';
import { Link } from 'react-scroll';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import Maillogo from './Media/maillogo.svg';

const Contacts = () => {
    return (
        <>
        <div className = "Contacts"> 
        <div className = "Item2">
            <div className = "Headers">Contacts</div>
            <a href="https://github.com/samuelkivi" target="_blank" rel="noopener noreferrer">
                <img className="github" src={Github} alt="GitHub"></img>
            </a>

            <a href="mailto:samuel.kivi98@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="maillogo" src={Maillogo} alt="Mail Logo" />
            </a>  
        </div>
        </div>
        </>
    )
}


export default Contacts;