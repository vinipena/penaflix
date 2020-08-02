import React from 'react';
import Logo from '../../Assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from './Components/ButtonLink';

function Menu(){
    return (
    <nav className='Menu'>
    <a href='/'>
        <img className='Logo' src={Logo} alt = 'PenaFlix Logo'/>
    </a>
    <Button as='a' href='/' className='ButtonLink'>
		Novo Video
	</Button>
    </nav>
   
    );
}

export default Menu;