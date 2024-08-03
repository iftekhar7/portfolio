import React from 'react' 
import { aboutData, skillsData } from './data';
function About() {
    return (
        <div className="content-body">
             <section className='max-w-1280 mx-auto '>
            <div className='text-center'>
                <p className=" text-secondary text-uppercase text-center">INTRODUCTION</p>
                <h2 className=" text-white f-60 fw-700 text-center mb-5">Overview.</h2>
                <p className='line-height-30'>I'm <b>Mohammad Iftekhar - 24 years old</b> Front End Developer and Designer in Gurugram with experience in HTML, CSS, SCSS, React js, Redux Toolkit, and JavaScript,
                    and expertise in frameworks like Bootstrap, and MUI. I'm a quick learner and collaborate closely with clients
                    to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring
                    your ideas to life! Achievement.</p>
            </div>
            <div className='grid-view custom-grid'>
                {aboutData.map((item, index) => {
                    return (
                        <div className='grid-view-items' key={item?.id}>
                            <div className='custom-card-view'>
                                <div className="custom-card-body">
                                    <div className="img-wrapper border-0 p-2">
                                        <img src={item?.image} alt="project_image" />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-secondary text-center f-18">{item?.experience ? item?.experience : 'N/A'}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className=''>
                <h2 className=" text-white f-60 fw-700 mt-5 mb-4">Skills.</h2>
                <div className='grid grid-cols-12 grid-cols-8 grid-cols-4  gap-4'>
                    {skillsData.map((el, id) => {
                        return (
                            <div key={id} className='h-full w-full bg-backdrop p-1 rounded' title={el?.description}>
                                <img src={el?.image} className='image' alt='logo'/>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
        </div>
    )
}

export default About;