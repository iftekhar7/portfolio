import React from 'react'
import { socialIconData } from './data';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Home() {

    return (
        <div className='content-body p-0'>
            <section className="d-flex align-items-center responsive-mob-view landing-page ">
                <div className='flex-40 responsive-item'>
                    <div className='profile-info'>
                        <div className='social-icon-wrapper'>
                            {socialIconData?.map(item => {
                                return (
                                    <React.Fragment key={item?.id}>
                                        <a href={item?.sourceLink} data-tooltip-id={item?.name} data-tooltip-content={item?.name}> <i className={item?.icon} /></a>
                                        <Tooltip className="tooltip" id={item?.name} place="top" />
                                    </React.Fragment>
                                )
                            })}
                        </div>
                        <h6 className='text-secondary f-16'>Hello I'm</h6>
                        <h1 className='text-white f-48'>Mohammad <span className='text-secondary'>Iftekhar</span></h1>
                        <h3 className='mt-0 mb-5'>Frontend <span className='text-secondary'>Developer</span> and UX Designer</h3>
                        <p>UX Designer and Frontend Developer with 2.5+ years of experience in optimizing user experience through innovative solutions and dynamic interfaces. Highly enthusiastic and motivated individual seeking opportunities to leverage my technical knowledge. Possesses the ability to handle work pressure and excellent communication skills. Flexible to work in any environment.</p>
                        <a href="about.html" className="btn-about">About Me</a>
                    </div>
                </div>
                <div className='flex-60 responsive-item'>
                </div>
            </section>
        </div>
    )
}

export default Home;