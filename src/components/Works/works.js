import React from 'react'
import './works.css'


const Works = () => {
  return (
    <section id="works">
        <h2 className="workTitle">My Portfolio</h2>
        <span className="workDesc">I am dedicated to delivering high-quality solutions that optimize complex workflows. As a Teaching Assistant, I've had the privilege of leading and mentoring students in web development, emphasizing usability, accessibility, and best practices. I am excited to bring my skills to the forefront, creating innovative and impactful digital experiences. Explore my portfolio and join me on this journey at the intersection of technology and creativity!</span>
        <div className="workImgs">
            <a href="https://cardeal.onrender.com"><div className='project1'><p>Backend of Dynamic car shop website</p></div></a>
            <a href="https://todolist-237p.onrender.com"><div className='project1'><p>To Do list API with MongoDB and Swagger</p></div></a>
        </div>
    </section>
  )
}

export default Works