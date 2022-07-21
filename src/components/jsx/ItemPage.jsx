import React from "react";
import styled from "styled-components";
import Img from "../../assets/a.jpg";
import InfoDrawer from "./InfoDrawer";
import Data from "../../data/data";

const ProductMain = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: red;
`;

const ImageMain = styled.image`
  height: 90vh;
  width: 50%;
  left: 0;
  margin-top: 70px;
  /* background-image: url(${Img}); */
  /* background-image: url("//unsplash.it/600/600"); */
  background-image: url("${Data.products[0].phone.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-color: yellow;
  background-size: cover;
`;

function ItemPage(_props) {
  return (
    <ProductMain>
      <ImageMain
        style={{ backgroundImage: `url(${Data.products[0].phone.image})` }}
      />
      {/* {
        (document.getElementById(
          "setimg"
        ).style.backgroundImage = `url("${Data.products[0].phone.image}"`)
      } */}
      <InfoDrawer productinfo={Data.products[0]} />
    </ProductMain>
  );
}

export default ItemPage;
