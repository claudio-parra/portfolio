import React from 'react'
import './works.css'
import carShop from '../../assets/carShop.png'
import toDoList from "../../assets/toDoList.png"
import plums from "../../assets/plums.png"


const Works = () => {
  return (
    <section id="works">
        <h2 className="workTitle">My Portfolio</h2>
        <span className="workDesc">I am dedicated to delivering high-quality solutions that optimize complex workflows. As a Teaching Assistant, I've had the privilege of leading and mentoring students in web development, emphasizing usability, accessibility, and best practices. I am excited to bring my skills to the forefront, creating innovative and impactful digital experiences. Explore my portfolio and join me on this journey at the intersection of technology and creativity!</span>
        
        <div className="workImgs">

          <div className='card'>
          <div className='card'>
            <a target='_blank' href="https://plums-sepia.vercel.app/welcome">
                <img src={plums} alt="" />
                <h2>Plums notes</h2>
                <p>Reactjs/Nextjs Full Stack web app with OAuth user authentication, account login, notes/files management system.</p>
            </a>
          </div>

            <a target='_blank' href="https://cardeal.onrender.com">
                <img src={carShop} alt="" />
                <h2>CarShop site</h2>
                <p>Add cars for dynamic pages. Create account, log in; JWT ensures access, includes comprehensive error handling.</p>
            </a>
          </div>
          
          <div className='card'>
            <a target='_blank' href="https://todolist-237p.onrender.com">
                <img src={toDoList} alt="" />
                <h2>To-Do List</h2>
                <p>Express/MongoDB API with OAuth user authentication, account creation, Google login, and comprehensive error handling.</p>
            </a>
          </div>

        </div>

    </section>
  )
}

export default Works