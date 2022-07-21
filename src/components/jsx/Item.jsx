import React from "react";
import PropTypes from "prop-types";
import "../css/Item.css";

export const Item = (props) => {
  let innerTittle = props.innerTittle ? props.innerTittle : "Product";
  let innerContent = props.innerContent ? props.innerContent : "Content";
  return (
    <div className="container">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <span className="stars"></span>
            <h2 className="written">{innerTittle}</h2>
            <p className="written">{innerContent}</p>
          </div>
        </div>
        <div className="face face2">
          <h2>{props.heading}</h2>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  props: PropTypes,
};

export default Item;
