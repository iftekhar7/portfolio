/**
 *
 * Button83
 *
 */

import React, { memo } from "react";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

function Button({ icon, iconURL, className, name, dataFor, label, dataTip, disabled, dragRef, id, onClick, ...props }) {

	return (
		<React.Fragment>
			{iconURL && <link rel="stylesheet" href={iconURL}></link>}
			<button ref={dragRef} id={`${dataFor}`} name={name} className={`button ${className ??''}`} onClick={() => onClick && onClick()} disabled={disabled ? disabled : false} data-for={dataFor} data-tip={dataTip}>
				<i className={icon} />
				{label}
				<Tooltip className="tooltip" anchorId={`${dataFor}`} content={dataTip} place={dataFor === "chartDraggable" ? "right" : "top"} />
			</button>
		</React.Fragment>
	)

}



export default memo(Button);