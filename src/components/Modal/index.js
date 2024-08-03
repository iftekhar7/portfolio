/**
 *
 * Modal83
 *
 */

import React, { memo } from 'react'; 
import Button from '../Button';
function Modal({ isVisible, onConfirm, onCancel, onSubmit, disabled, setIsUploadArchitectureModalOpen, customClass, ...props }) {

  return (
    isVisible &&
    <div className={customClass ? `modal-wrapper slidingPane sliding-modal83 sliding-modal83-transition ${customClass}` : "modal-wrapper slidingPane sliding-modal83 sliding-modal83-transition"} >
      <div className={`modal-dialog ${props.modalType === "delete" ? 'modal-sm' : props.modalWidth} modal-dialog-scrollable`}>
        <div className="modal-content">
          <div className={`modal-header ${props.modalType === "delete" ? "modal-header-delete" : ""}`}>
            <h5 >{props.modalHeading}</h5> 
            <Button className="button-close" icon='fal fa-times' onClick={() => onCancel()} />
          </div> 
            <div className='modal-scrollable'>
              <div className="modal-body">
                {props.children}
              </div>
            </div> 
          <div className="modal-footer">
            <Button className='button-dark padding-x-15 margin-right-10' label="Close" icon="fal fa-times" data-bs-dismiss="modal" onClick={() => onCancel()} /> 
            {!props.hideSubmitButton &&
              <Button disabled={disabled} className={props.modalType === "delete" ? "button-danger" : "button-primary"} label={props.modalType === "delete" ? "Delete" : "Save"} onClick={onConfirm ?? onSubmit} />
            }
          </div>
        </div>
      </div>
    </div>

  );
}

Modal.propTypes = {};

export default memo(Modal);
