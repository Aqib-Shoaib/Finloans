import styled from "styled-components";
import FreqItem from "./FreqItem";
import Title from "./Title";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;

  @media screen and (max-width: 762px) {
    grid-template-columns: auto;
  }
`;

const Questions = styled.div`
  height: 100%;
  padding-top: 8rem;
  padding-right: 3rem;
  padding-left: 1rem;

  & .head {
    padding-bottom: 2rem;
  }

  @media screen and (max-width: 762px) {
    padding-left: 3rem;
  }
`;
const Img = styled.img`
  max-width: 100%;
`;

export default function FreqSection() {
  return (
    <StyledSection>
      <div>
        <Img src="./faq.png" alt="faq png" />
      </div>
      <Questions>
        <Title className="head">Frequently Asked</Title>
        <FreqItem
          question="question one"
          answer="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
        />
        <FreqItem
          question="question two"
          answer="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
        />
        <FreqItem
          question="question three"
          answer="Esteem spirit temper too say adieus who direct esteem esteems luckily or picture placing drawing."
        />
      </Questions>
    </StyledSection>
  );
}
