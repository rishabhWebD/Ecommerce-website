import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

//import { connect } from "react-redux";

import Specs from "./InfoDrawerItems/Specs";
import Reviews from "./InfoDrawerItems/Reviews";
import Comparison from "./InfoDrawerItems/Comparison";
import Buy from "./InfoDrawerItems/Buy";
import { IconButton } from "@mui/material";
import AdditionalDetails from "./InfoDrawerItems/AdditionalDetails";

const Root = styled("div")(({ theme }) => ({
  height: "85vh",
  width: "50vw",
  paddingTop: "75px",
  paddingBottom: "30px",
  paddingLeft: "10px",
  backgroundColor:
    theme.palette.mode === "light"
      ? "#e9e9e9"
      : theme.palette.background.default,
  position: "relative",
  "overflow-y": "scroll",
  scrollbarColor: "none",
  "::-webkit-scrollbar": {
    width: "10px",
  },
  "::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#888",
    "border-radius": "10px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
}));

const ThrowItRight = styled("div")(({ theme }) => ({
  margin: "10px 10px",
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "1rem",
}));

export const InfoDrawer = (props) => {
  return (
    <Root>
      <ThrowItRight>
        Add To Cart
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          sx={{
            marginLeft: "auto",
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </ThrowItRight>
      <Specs title={props.productinfo.phone.specs} />
      <AdditionalDetails value="check" />
      <Reviews value="Value" />
      <Comparison value="Value" />
      <Buy price={props.productinfo.phone.price} />
    </Root>
  );
};

InfoDrawer.propTypes = {
  props: PropTypes,
};

//const mapStateToProps = (state) => ({});
//const mapDispatchToProps = {};
// connect(mapStateToProps, mapDispatchToProps)(InfoDrawer);

export default InfoDrawer;
