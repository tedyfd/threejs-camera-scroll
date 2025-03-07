import { motion } from 'framer-motion'
import React, { forwardRef } from "react"

const fadeIn = (direction, delay) => {
  return{
      hidden: {
          opacity: 0,
          y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
          x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      },
      show: {
          y: 0,
          x: 0,
          opacity: 1,
          transition: {
              type: 'tween',
              duration: 1.2,
              delay: delay,
              ease: [0.25, 0.25, 0.25, 0.75],
          }
      }
  }
}

const RoomScrollOverlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    className="scroll">
    <div style={{ height: "200vh" }}>
      <div className="item">
        <h1>Hello, I'm Tedy Fernando</h1>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="item">
        <div className="col">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true,amount:0.7}}
          >
            <img src="/business-porto.png" alt="System Development & Web Development" className='project-img' width="905" height="529" />
          </motion.div>
        </div>
        <div className="col right">
          <h1>Web Development</h1>
          <p>Assist business owners with reporting and recording their business activities, ensuring accurate documentation and compliance. My services include generating insightful reports, and implementing efficient systems for better decision-making.</p>
        </div>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="item">
        <div className="col">
          <h1>Game Development</h1>
          <p>I create games in my free time. My project is developed using Unreal Engine, and all assets are made by me. This game will be released on Steam. Stay tuned!</p>
        </div>
        <div className="col">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:true,amount:0.7}}
          >
            < img src="/game-porto.png" alt="Game Development & Unreal Engine" className='project-img' width="1024" height="668"/>
          </motion.div>
        </div>
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="item center">
        <div className="col about">
          <h1>Hey!</h1>
          <p>Hi! I m Tedy, an IT & Web Developer based in Indonesia. My expertise includes system development, system design, and game development. Experience in developing websites allows me to develop systems quickly.</p>
          <p>In my free time, I do weight training, play video games, and 3D Design. I m always interested in hearing about new projects, so feel free to contact me.</p>
        </div>
        <div className="col-icon">
          <a href="https://www.linkedin.com/in/tedyfd/" target="_blank"> 
              <img src="/linkedin.svg" alt="" className="icon" width="50" height="50" />
          </a>
          <a href="https://github.com/tedyfd" target="_blank">
              <img src="/github.svg" alt="" className="icon"width="48" height="48" />
          </a>
          <a href="https://www.fiverr.com/tedyfernando" target="_blank">
              <img src="/fiverr.svg" alt="" className="icon"width="150" height="150" />
          </a>
        </div>
      </div>
    </div>
    
    {/* <span className="caption" ref={caption}>
      0.00
    </span> */}
  </div>
))

export default RoomScrollOverlay
