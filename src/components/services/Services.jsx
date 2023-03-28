import React, { useState } from 'react';
import "./services.css"

const Services = () => {

   const [toogleState,setToggleState]=useState(0);
   const toggleTab=(index)=>{
      setToggleState(index);
   }
  return (
 

    <section className='services section ' id="services">
        <h2 className='services_title'>Services</h2>
        <h6 className='services_subtitle'>What I offer</h6>


        <div className='services_container container grid'>
            <div className='services_content'>
                <div>
                    <i className='uil uil-arrow services_icon'></i>
                    <h3 className='services_title'>Full Stack <br/> Developer</h3>
                </div>

                <span className='services_button' onClick={()=>toggleTab(1)}>View More
                <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toogleState === 1 ? "services_modal active-modal" :"services_modal"}>
                    <div className='services_modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times
                        services_modal-close'></i>

                        <h3 className='services_modal-title'>Full Stack <br/> Developer</h3>
                        <p className='services_modal-description'>
                        Service with more than 1 years of experience.
                        Providing quality work to clients and companies.</p>
                         
                       <ul className='services_modal-services grid'>
                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>I develop the user interface.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>Web page development.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>I create ux element interactions.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>I position your company brand.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>Design and mockups of products for companies.

                              </p>
                           </li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className='services_content'>
                <div>
                    <i className='uil uil-arrow services_icon'></i>
                    <h3 className='services_title'>Ui/Ux <br/> Designer</h3>
                </div>

                <span className='services_button' onClick={()=>toggleTab(2)}>View More
                <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toogleState === 2 ? "services_modal active-modal" :"services_modal"}>
                    <div className='services_modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times
                        services_modal-close'></i>

                        <h3 className='services_modal-title'>Ui/Ux <br/> Designer</h3>
                        <p className='services_modal-description'>
                        Service with more than 1 years of experience.
                        Providing quality work to clients and companies.</p>
                         
                       <ul className='services_modal-services grid'>
                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>I develop the user interface.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>Web page development.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>I create ux element interactions.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>I position your company brand.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>Design and mockups of products for companies.

                              </p>
                           </li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className='services_content'>
                <div>
                    <i className='uil uil-arrow services_icon'></i>
                    <h3 className='services_title'>Visual <br/> Designer</h3>
                </div>

                <span className='services_button' onClick={()=>toggleTab(3)}>View More {" "}
                <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className={toogleState === 3 ? "services_modal active-modal" :"services_modal"}>
                    <div className='services_modal-content'>
                        <i onClick={()=>toggleTab(0)} className='uil uil-times
                        services_modal-close'></i>

                        <h3 className='services_modal-title'>Visual <br/> Designer</h3>
                        <p className='services_modal-description'>
                        Service with more than 1 years of experience.
                        Providing quality work to clients and companies.</p>
                         
                       <ul className='services_modal-services grid'>
                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>I develop the user interface.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>Web page development.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>I create ux element interactions.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>I position your company brand.
                              </p>
                           </li>

                           <li className='services_modal-services'>
                              <i className='uil uil-check-circle
                              services_modal-icon'></i>
                              <p className='services_modal-info'>Design and mockups of products for companies.

                              </p>
                           </li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
        
               
    </section>
  )
}

export default Services
