/**
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
//import { Link } from 'react-scroll';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const breadcrumbs = () => {
  return (
    <div className = "Breadcrumbs">
    <Breadcrumbs aria-label="breadcrumb">
    <Typography color="textPrimary">Home</Typography>
      <Link color="inherit" href="/aboutme" onClick={handleClick} activeClass="active"
                to="Aboutme"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}>
        About me
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Contacts
      </Link>
      
    </Breadcrumbs>
    </div>
  );
}

export default breadcrumbs;
*/