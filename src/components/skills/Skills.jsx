import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'


const Skills = () => {
  return (
    <section className='skills section' id="skills">

    <h1 className='skills2_title'>Skills</h1>
    <h6 className='skills2_subtitle'>My technical level</h6>
    <div className='skills_container grid'>
      <Frontend/>
      <Backend/>
    </div>
    </section>
  )
}

export default Skills
