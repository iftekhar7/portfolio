import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import { allSlidesData } from "./sliderData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NoDataFound from "../../components/NoDataFound";

function UxScreenDesignModal(props) {
  const [allFilterData, setAllFilterData] = useState([]);

  const getFilteredData = (cardData) => {
    const filterData = allSlidesData.filter((item) => item?.name === cardData);
    setAllFilterData(filterData);
  };

  useEffect(() => {
    if (
      props?.imageViewModal?.isImageViewModal === true &&
      props?.imageViewModal?.imageViewModalState !== ""
    ) {
      getFilteredData(props?.imageViewModal?.imageViewModalState);
    }
  }, [
    props?.imageViewModal?.isImageViewModal,
    props?.imageViewModal?.imageViewModalState,
  ]);

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
      {allFilterData?.length > 0 ? (
        <div className="carousel-container w-100">
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
                <div key={JSON.stringify(index)} className="carousel-item">
                  <img src={item?.projectImage} alt="projectLogo" />
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <NoDataFound height={"calc(100vh - 334px)"} />
      )}
    </Modal>
  );
}

export default UxScreenDesignModal;
