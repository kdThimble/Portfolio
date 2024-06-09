import React from 'react';

const ToolTips = (props) => {
  const tooltipClasses = `absolute z-10 px-3 py-1 text-sm leading-tight text-white bg-gray-800 rounded shadow-lg ${props.position === 'bottom' ? 'top-full left-1/2 transform -translate-x-1/2 mt-2' : 'bottom-full left-1/2 transform -translate-x-1/2 -mb-2'}`;

  return (
    <div className="relative inline-block">
      <div className="inline-block" tabIndex="0">
        {props.children}
      </div>
      <div className={tooltipClasses}>
        {props.text}
        <svg
          className={`absolute text-gray-800 ${props.position === 'bottom' ? 'top-full left-1/2 transform -translate-x-1/2 mt-px' : 'bottom-full left-1/2 transform -translate-x-1/2 -mb-px'}`}
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

export default ToolTips;
