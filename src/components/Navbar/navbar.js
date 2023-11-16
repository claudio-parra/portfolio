import React, { useState } from 'react'
import logo from '../../assets/C.svg'
import { Link } from 'react-scroll';
import { BiMenuAltRight } from "react-icons/bi";
import './navbar.css'

import { SiLinkedin } from 'react-icons/si'



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link>
        </div>
        
        <a href="https://www.linkedin.com/in/claudio-parra-inostroza/" target="_blank" rel="noreferrer">
        <button className="desktopMenuBtn">
        <SiLinkedin className='link' size='1.5em' color='rgb(9,102,194)' /> Let's Connect
        </button>
        </a>
                    
          

        <BiMenuAltRight color='yellow' size='4em' className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display:showMenu? 'flex': 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            <a className="listItem" href="https://www.linkedin.com/in/claudio-parra-inostroza/" target="_blank" rel="noreferrer">
            Let's Connect<SiLinkedin className='link' size='1.3rem' color='rgb(9,102,194)' /> 
        </a>
        </div>


    </nav>
  )
}

export default Navbar