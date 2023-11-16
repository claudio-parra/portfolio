import React from 'react'
import './skills.css'
import reactImg from '../../assets/React-icon.png'
import mongoDb from '../../assets/mongoDB.png'
import nextjs from '../../assets/nextjs.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do </span>
        <span className="skillDesc">I am a passionate Software Engineer with expertise in full-stack web development. My journey in the tech realm involves crafting dynamic and responsive websites using languages such as C#, JavaScript, and Python. With a solid foundation in Object-Oriented Programming and a knack for database design using SQL and MongoDB.</span>
        <div className="skillBars">

            <div className="skillBar">
                <img src={reactImg} alt="react image" className="React logo image" />
                <div className="skillBarText">
                    <h2>React</h2>
                    
                </div>
            </div>

            <div className="skillBar">
                <img src={mongoDb} alt="Mongo Image" className="Mongodb logo image" />
                <div className="skillBarText">
                    <h2>MongoDB</h2>
                    
                </div>
            </div>

            <div className="skillBar">
                <img src={nextjs} alt="Next js image" className="Next.js logo image" />
                <div className="skillBarText">
                    <h2>Next.js</h2>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills