import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const Question = styled.h4`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.5;
  color: #040e27;
  margin-left: 0.3rem;
  transition: all 0.4s linear;
  text-transform: capitalize;
  cursor: pointer;
`;

const Ans = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8;
  color: #727272;
  transition: all 0.3s ease;
  padding: 2rem 0.3rem;
`;

const StyledItem = styled.div`
  border-bottom: 1px solid #727272;
  padding-top: 2rem;
  width: 80%;
  transition: all 0.3s ease;
`;

/* eslint-disable react/prop-types */
export default function FreqItem({ question, answer }) {
  const [showAns, setShowAnswer] = useState(false);
  return (
    <StyledItem>
      <Question onClick={() => setShowAnswer(!showAns)}>
        {showAns ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
        )}
        {question}
      </Question>
      {showAns && <Ans>{answer}</Ans>}
    </StyledItem>
  );
}
