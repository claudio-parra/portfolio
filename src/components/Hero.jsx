import React from 'react'
import { HERO_CONTENT } from '../constants'
import creatingPage from '../assets/undrawCreatingPage.svg'
import { motion } from "motion/react"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                 variants={container(0)}
                 initial="hidden"
                 animate="visible"
                 className="pb-16 text-6xl sm:text-6xl lg:text-6xl xl:text-8xl font-thin tracking-tight lg:mt-16 whitespace-nowrap">Claudio Parra</motion.h1>
                    <motion.span
                     variants={container(0.5)}
                     initial="hidden"
                     animate="visible"
                     className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-4xl tracking-tight text-transparent">
                        Web Developer</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 pg:p-8'>
                <div className='flex justify-center'>
                <motion.img 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                src={creatingPage} alt='Creating' style={{ width: '550px', height: '550px' }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero