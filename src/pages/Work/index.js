import React from 'react'

function Work() {
    return (
        <div className='content-body'>
            <div className='padding-top-60'>
                <p className=" text-secondary text-uppercase text-center">What I have done so far</p>
                <h2 className=" text-white f-60 fw-700 text-center">Work Experience.</h2>
            </div>
            <section className=''>
                <div className='vertical-timeline'>
                    <div className='vertical-timeline-element'>
                        <span className='vertical-timeline-element-icon'>
                            <img src={require('../../images/iot83.png')} alt='companyLogo'/>
                        </span>
                        <div className='vertical-timeline-element-content'>
                            <div>
                                <h3 className="text-white">Software Engineer</h3>
                                <p className="text-secondary ">83INCS PRIVATE LIMITED</p>
                            </div>
                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                <li className="">Workings as UX/UI Designer and Developer in iot83, responsible for designing and developing web templates and Reusable UI components in react.</li>
                                <li className="">Translated designs &amp; wireframes into high-quality code and wrote application interface code via JavaScript following React.js workflows</li>
                                <li className="">Identified web-based user interactions and developed highly-responsive user interface components via React concepts</li>
                                <li className="">Participating in code reviews and providing constructive feedback to other developers.</li>
                            </ul>
                            <span className="vertical-timeline-element-date date-right">November 2022 - Present</span>
                        </div>
                    </div>
                    <div className='vertical-timeline-element'>
                        <span className='vertical-timeline-element-icon success-light-bg'>
                            <img src={require('../../images/iot83.png')} alt='companyLogo' />
                        </span>
                        <div className='vertical-timeline-element-content '>
                            <div>
                                <h3 className="text-white text-[24px] font-bold font-montserrat">UI/UX Developer Intern</h3>
                                <p className="text-secondary f-16 fw-500">83INCS PRIVATE LIMITED</p>
                            </div>
                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                <li className="font-jost text-white-100 text-[14px] pl-1 tracking-wider">Achieved product milestones by establishing UX goals priorities and deliverables</li>
                                <li className="font-jost text-white-100 text-[14px] pl-1 tracking-wider"> Project: Electron Developed and Designed Electron's Admin dashboard using React js, scss, js, HTML5 , bootstrap 4.</li>
                            </ul>
                            <span className="vertical-timeline-element-date date-right">July 2022 - November 2022</span>
                        </div>
                    </div>
                    <div className='vertical-timeline-element'>
                        <span className='vertical-timeline-element-icon'>
                            <img src={require('../../images/iot83.png')} alt='companyLogo'/>
                        </span>
                        <div className='vertical-timeline-element-content '>
                            <div>
                                <h3 className="text-white text-[24px] font-bold font-montserrat">Internship and Certifications </h3>
                                <p className="text-secondary f-16 fw-500">Newton School | Full Stack Web Development Bootcamp</p>
                            </div>
                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                <li className="font-jost text-white-100 text-[14px] pl-1 tracking-wider">Technical Stack learned: Java, HTML, CSS, JavaScript, React Js and Bootstrap. </li>
                                <li className="font-jost text-white-100 text-[14px] pl-1 tracking-wider">Participated in various Coding contest organized by the platform. </li>
                                <li className="font-jost text-white-100 text-[14px] pl-1 tracking-wider">Worked on various projects: Facebook Log In Page, Calculator, Food Order-site, Tic-Tac-Toe-game </li>
                            </ul>
                            <span className="vertical-timeline-element-date">July 2021 - February 2022</span>
                        </div>
                    </div> 
                </div>
            </section>
        </div>
    )
}

export default Work;