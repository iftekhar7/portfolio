/**
 *
 * NoDataFound
 *
 */

import React, { memo } from "react";
import NoDataImage from '../../images/No Data2.svg';

function NoDataFound({ noDataFoundImage, text, height, title }) {
  return (
    <div className={`no-data-found-wrapper`} style={{height: height ? height :"" }}>
      <div className='no-data-found'>
        <div className="no-data-found-container">
          <div className="no-data-found-image">
            <img  src={noDataFoundImage ? noDataFoundImage : NoDataImage} />
          </div>

          {/* <p>Oops!</p> */}
          <h5>There is no {title ? title : ""} data to display.</h5>
          <p>{text ? text : ""}</p>
        </div>
      </div>
    </div>
  );
}

NoDataFound.propTypes = {};

export default memo(NoDataFound);
