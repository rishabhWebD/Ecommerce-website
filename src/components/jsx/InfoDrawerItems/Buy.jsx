import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";

const Buy = (props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Buy</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h4">&#x20B9;{props.price}</Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          startIcon={<SendIcon />}
        >
          Proceed &#x20B9;{props.price}
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default Buy;
