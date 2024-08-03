import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { allSlidesData } from "./sliderData";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NoDataFound from "../../components/NoDataFound";

function UxScreenDesignModal(props) {
  const [currentStepper, setCurrentStepper] = useState(0);
  const [allFilterData, setAllFilterData] = useState([])
  const getCurrentStepIndex = () =>
    allFilterData?.findIndex((step) => step?.id === currentStepper + 1);

  const gotoNextStep = () => {
    setCurrentStepper((prevSlide) => (prevSlide + 1) % allFilterData?.length);
  };

  const gotoBackStep = () => {
    setCurrentStepper((prevSlide) =>
      prevSlide === 0 ? allFilterData?.length - 1 : prevSlide - 1
    );
  };

  const getFilteredData = (cardData) => {
    const filterData = allSlidesData.filter((item) => item?.name == cardData)
    setAllFilterData(filterData)

  };

  useEffect(() => {
    if (props?.imageViewModal?.isImageViewModal === true && props?.imageViewModal?.imageViewModalState !== "") {
      getFilteredData(props?.imageViewModal?.imageViewModalState)
    }

  }, [props?.imageViewModal?.isImageViewModal])


  return (
    <Modal
      additionalHeading=""
      modalWidth={"modal-lg"}
      isVisible={props?.imageViewModal?.isImageViewModal}
      customclass="editModal"
      hideSubmitButton
      modalHeading={"Adu Config Controller"}
      onCancel={props?.closeModalHandler}
    >
      {allFilterData?.length > 0 ?
        <div className='carousel-container w-100'>
          <Carousel
            autoPlay={true}
            interval={2000}
            showArrows={true}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={60}
          >
            {allFilterData.map((item, index) => {
              return (
                <div key={JSON.stringify(index)} className='carousel-item'>
                  <img src={item?.image} alt="image" />
                </div>
              )
            })}
          </Carousel>

        </div>
        : <NoDataFound height={'calc(100vh - 334px)'} />}
      {/* <div className="image-wrapper">
        <ul className="list-style-none">
          <li className="full-image-wrapper">
            <div className="full-image">
              <img
                src={allFilterData?.length> 0 && allFilterData[currentStepper].image}
                alt={`Slide ${allFilterData?.length> 0 && allFilterData[currentStepper].id}`}
              />
            </div>
            <div
              className="previes-arrow"
              onClick={gotoBackStep}
              data-tooltip-id="previes"
              data-tooltip-content="Previes"
            >
              <i className="fas fa-angle-left" />
              <Tooltip className="tooltip" id="previes" place="top" />
            </div>
            <div
              className="next-arrow"
              onClick={gotoNextStep}
              data-tooltip-id="next"
              data-tooltip-content="Next"
            >
              <i className="fas fa-angle-right" />
              <Tooltip className="tooltip" id="next" place="top" />
            </div>
          </li>
        </ul>
        <div className="image-footer">
          <ul className="image-stepper-wrapper list-style-none">
            {allFilterData?.length > 0 && allFilterData?.map((item, index) => {
              return (
                <li
                  key={item?.id}
                  className={`image-stepper ${getCurrentStepIndex() === index ? "active" : ""
                    }`}
                >
                  <img src={item?.image} alt={item?.projectName} />
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
    </Modal>
  );
}

export default UxScreenDesignModal;
