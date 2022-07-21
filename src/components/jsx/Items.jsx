import React from "react";
import styled from "styled-components";
import Item from "./Item";
function Items(props) {
  return (
    <div className="main">
      {props.take.map((element, i) => {
        return <Item key={i} heading={element}></Item>;
      })}
    </div>
  );
}

const Spacer = styled.div`
  height: 70px;
  width: 100%;
`;

export default Items;

export { Spacer };
