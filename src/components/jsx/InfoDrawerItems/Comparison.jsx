import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Reviews = (props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Comparision</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h4">{props.value}</Typography>
        <Typography variant="h4">{props.value}</Typography>
        <Typography variant="h4">{props.value}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Reviews;
