import React from 'react';
import Works from './Works';
import './work.css'

const Work = () => {
  return (
    <section className='work section' id='portfolio'>
        <h2 className='work2_title'>Porfolio</h2>
        <h6 className='work2_subtitle'>Most recent works</h6>

        <Works/>
    </section>
  )
}

export default Work
