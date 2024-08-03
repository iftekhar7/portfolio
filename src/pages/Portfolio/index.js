import React, { useState } from 'react'
import { cardData } from './data';
import UxScreenDesignModal from './UxScreenDesignModal';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


function Portfolio() {
    const [imageViewModal, setImageViewModal] = useState({
        isImageViewModal: false,
        imageViewModalState: '',
    })
    const closeModalHandler = () => {
        setImageViewModal({
            isImageViewModal: false,
            imageViewModalState: "",
        })
    }
    const clickModalHandler = (name) => {
        setImageViewModal({
            isImageViewModal: true,
            imageViewModalState: name,

        })
    }


    return (
        <React.Fragment>
            <div className='content-body p-0'>
                <section className='landing-page carousel-banner-bg'>
                    <div className='carousel-container'>
                        <Carousel
                            autoPlay={true}
                            interval={2000}
                            showArrows={true}
                            infiniteLoop={true}
                            centerMode={true}
                            centerSlidePercentage={60}
                        >
                            {cardData.map((item, index) => {
                                return (
                                    <div key={JSON.stringify(index)} className='carousel-item'>
                                        <img src={item?.image} alt="" />
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                </section>
                <section className='max-w-1280 mx-auto margin-bottom-60'>
                    <div className='section-title'>
                        <p className=" text-secondary text-uppercase text-center">My Work</p>
                        <h2 className="f-60 fw-700 text-center mb-5">Projects.</h2>
                    </div>
                    <div className='grid-view'>
                        {cardData.map((item, index) => {
                            return (
                                <div className='grid-view-items' key={item?.id}>
                                    <div className='custom-card-view'>
                                        <div className="custom-card-body">
                                            <div className="img-wrapper">
                                                <img src={item?.image} alt="project_image" />
                                                <div className="expand-icon" data-tooltip-id={`${item?.projectName}`} data-tooltip-content="Expand and View more" onClick={() => clickModalHandler(item?.projectName)}>
                                                   
                                                    <i className="fas fa-expand-wide"></i>
                                                </div>
                                                <Tooltip className="tooltip" id={`${item?.projectName}`}  />
                                            </div>
                                            <div className="mt-4">
                                                <h3 className="text-secondary text-left f-18">{item?.projectName ? item?.projectName : 'N/A'} <span className="text-content-dark">-{item?.companyName ? item?.companyName : 'N/A'}</span></h3>
                                            </div>
                                            <div className="detail-info">
                                                <p className="text-orange">{item?.typeScript ? item?.typeScript : null}</p>
                                                <p className="text-orange">{item?.react ? item?.react : "N/A"}</p>
                                                <p className="text-amber">{item?.html ? item?.html : 'N/A'}</p>
                                                <p className=" text-sky ">{item?.framework ? item?.framework : "N/A"}</p>
                                                <p className=" text-darkGrey ">{item?.eatonLibrary ? item?.eatonLibrary : null}</p>
                                                <p className=" text-teal">{item?.scss ? item?.scss : 'N/A'}</p>
                                                <p className=" text-slate">{item?.amCharts ? item?.amCharts : 'N/A'}</p>
                                            </div>
                                            <div className="custom-card-footer">
                                                <p className="text-content f-14">{item?.designStatus ? item?.designStatus : 'N/A'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
            {<UxScreenDesignModal closeModalHandler={closeModalHandler} imageViewModal={imageViewModal} />}
        </React.Fragment>
    )
}

export default Portfolio;