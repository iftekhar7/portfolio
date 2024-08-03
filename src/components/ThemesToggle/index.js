/**
 *
 * ThemesToggle
 *
 */

import React, { memo } from "react";

function ThemesToggle({ icon, onClick, ...props }) {
  return (
    <div className={props?.customClass ? props?.customClass : ""}>
      <input type="checkbox" className="checkbox-toggle" id="checkbox" checked={props.themes} onChange={(e) => onClick(e.target.checked)} />
      <label for="checkbox" className="checkbox-label" data-on="Dark" data-off="Light">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
}
export default memo(ThemesToggle);
