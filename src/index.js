import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Aboutme from './Components/Aboutme';
import Home from './Components/Home';
import Breadcrumbs from './Components/Breadcrumbs'
import Contacts from './Components/Contacts';

//<Breadcrumbs />

const App = () => {
    return(
        <>
            <div>
                <div>
                <Home />
                <Aboutme />
                <Contacts />
                </div>
            </div>
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));


