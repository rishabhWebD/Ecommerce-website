import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

const Stripe = styled.div`
  background: lightgrey;
  width: 100%;
  height: 70px;
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

const Heading = styled.div`
  font-size: 2.2rem;
  font-weight: 300;
  margin: 0px 12px;
`;

const Header = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Stripe>
            {/* <Hamburger /> */}
            <Heading>Marketplace</Heading>
            <Search />
          </Stripe>
        </Switch>
      </Router>
    </div>
  );
};

export default Header;
