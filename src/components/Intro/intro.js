import React from 'react'
import './intro.css'
import profileImg from '../../assets/profile2.png'
import { Link } from 'react-scroll'
import { IoMdBriefcase } from 'react-icons/io'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm 
            <span className="introName"> Claudio</span>
            <br/>Software Engineer</span>
            <p className="introPara">I am a skilled Software Engineer with experience in React, and MongoDB <br /> </p>
            <Link to='contact'><button className="btn"> <IoMdBriefcase/>Hire me</button></Link>
        </div>
        <img src={profileImg} alt=" profile image" className="bg" />
    </section>
  )
}

export default Intro