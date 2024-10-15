import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Review from "./Review";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";

const Arrow = styled.span`
  background: rgba(132, 197, 255, 0.5);
  color: rgba(132, 197, 255, 1);
  padding: 2rem;
  border-radius: 50%;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(132, 197, 255, 1);
    color: #fff;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 762px) {
    flex-direction: row-reverse;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  @media screen and (max-width: 762px) {
    flex-direction: column;
  }
`;

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const components = [
    <Review key="1" author="Micky Mouse" />,
    <Review key="2" author="Tom & Jerry" />,
    <Review key="3" author="Oggy Jack" />,
    <Review key="4" author="Ben Ten" />,
  ];

  // Function to go to the previous component
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next component
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <StyledDiv>
      <Div>{components[currentIndex]}</Div>
      <Div2>
        <Arrow onClick={goToNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </Arrow>
        <Arrow onClick={goToPrevious}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </Arrow>
      </Div2>
    </StyledDiv>
  );
}
