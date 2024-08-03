 import React, { useState } from "react";

const RippleButton = ({ variant, children, ...rest }) => {
    const [rippleStyle, setRippleStyle] = useState({});
  
    const handleMouseDown = (event) => {
      const button = event.currentTarget.getBoundingClientRect();
      const rippleX = event.clientX - button.left;
      const rippleY = event.clientY - button.top;
      const size = Math.max(button.width, button.height);
  
      setRippleStyle({
        top: rippleY - size / 2,
        left: rippleX - size / 2,
        width: size,
        height: size,
      });
    };
  
    return (
      <button
        className={`custom-button custom-button--${variant}`}
        onMouseDown={handleMouseDown}
        {...rest}
      >
        {children}
        <span className="ripple" style={rippleStyle}></span>
      </button>
    );
  };
  
  export default RippleButton;