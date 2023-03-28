import React,{useState} from 'react'
import './qualifications.css'
const Qualification = () => {
  const [toogleState,setToggleState]=useState(1);
   const toggleTab=(index)=>{
      setToggleState(index);
   }
  return (
    <section className='qualification section'>
      <h3 className='qualification2_title'>Qualification</h3>
      <h6 className='qualification2_subtitle'>My personal journey</h6>

      <div className='qualification_container container'>
        <div className='qualification_tabs'>
          <div className={toogleState ===1 ? 'qualification_button qualification_active button--flex' : "qualification_button button--flex"}
          onClick={()=>toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification_icon'></i> Education
          </div>

          <div className={toogleState ===2 ? 'qualification_button qualification_active button--flex' : "qualification_button button--flex"}
          onClick={()=>toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification_icon'></i>Experience
          </div>



        </div>

        <div className='qualification_sections'>
          <div className={toogleState === 1 ? 'qualification_content qualification_content-active ' : "qualification_content"}>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>BTECH(ECE)</h3>
                <h6 className='qualification_subtitle'>Techno India Uviversity</h6>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2019-2023
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>

            <div className='qualification_data'>
              <div></div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>AWS System Design</h3>
                <h6 className='qualification_subtitle'>Guvi Zen</h6>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2022-present
                </div>
              </div>


            </div>

            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Web Developement</h3>
                <h6 className='qualification_subtitle'>Intershala</h6>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-2022
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>

            <div className='qualification_data'>
              <div></div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Full Stack Web Developement</h3>
                <h6 className='qualification_subtitle'>Guvi Zen</h6>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2022-present
                </div>
              </div>


            </div>
          </div>

          <div className={toogleState === 2 ? 'qualification_content qualification_content-active ' : "qualification_content"}>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Web Design</h3>
                <h6 className='qualification_subtitle'>Fiverr</h6>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-present
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>

            <div className='qualification_data'>
              <div></div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Free Lancing</h3>
                <h6 className='qualification_subtitle'>Fiverr</h6>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-present
                </div>
              </div>


            </div>

            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Web Developement</h3>
                <h6 className='qualification_subtitle'>Intershala</h6>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2021-2022
                </div>
              </div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>

            <div className='qualification_data'>
              <div></div>

              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Full Stack Web Developement</h3>
                <h6 className='qualification_subtitle'>Guvi Zen</h6>
                <div className='qualification_calendar'>
                  <i className='uil uil-calendar-alt'></i>2022-present
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Qualification
