import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const Specs = (props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Specifications</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="h3">{props.title}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Specs;
