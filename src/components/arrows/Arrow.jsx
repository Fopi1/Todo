import React, { useContext, useRef } from "react";
import "./Arrow.css";
import { CurrentPageContext } from "../../Context/PageContext";

const Arrow = ({ style }) => {
  const { addCurrentPage } = useContext(CurrentPageContext);

  const action = useRef(0);
  return (
    <div className="arrow-container">
      <span
        onClick={() => {
          if (style === undefined) {
            action.current = 1;
          } else if (style.rotate === "180deg") {
            action.current = -1;
          }
          addCurrentPage(action.current);
        }}
        style={{ ...style }}
        className="arrow"
      ></span>
    </div>
  );
};

export default Arrow;
