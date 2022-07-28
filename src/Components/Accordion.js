import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { StyledAccordion } from "./styled/Accordion.styled"

const Accordion = ({ question, answer, key }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledAccordion>
      <a className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h3>{question}</h3>
        <div style={{ display: "flex" }}>{isActive ? <FiChevronUp size={25} /> : <FiChevronDown size={25} />}</div>
      </a>
      {isActive && <div className="accordion-content">{answer}</div>}
    </StyledAccordion>
  );
};

export default Accordion;