import React from "react";
import Item from "../Item";
import "./Frame28.css";

function Frame28(props) {
  const { itemProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-28 screen">
        <Item {...itemProps} />
      </div>
    </div>
  );
}

export default Frame28;
