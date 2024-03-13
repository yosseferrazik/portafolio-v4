import React, { ReactNode, useState } from "react";
import "./Tooltip.css";

const Tooltip = ({
  text,
  children,
}: {
  text: string;
  children: JSX.Element;
}) => {
  const [hover, setHover] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover && <div className="tooltip">{text}</div>}
      {children}
    </div>
  );
};

export default Tooltip;
