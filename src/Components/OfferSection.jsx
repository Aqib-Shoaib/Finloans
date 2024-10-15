import styled from "styled-components";
import OfferItem from "./OfferItem";
import Title from "./Title";
import Subtitle from "./Subtitle";

const Offer = styled.section`
  padding: 7rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  gap: 6rem;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
`;

const Flex2 = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (max-width: 762px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

export default function OfferSection() {
  return (
    <Offer>
      <Flex>
        <Title>What We Offer to you</Title>
        <Subtitle>
          We provide online instant cash loans with quick approval that suit
          your term
        </Subtitle>
      </Flex>
      <Flex2>
        <OfferItem image="service_1.png" title="Home Loan" />
        <OfferItem image="service_2.png" title="Car Loan" />
        <OfferItem image="service_3.png" title="Education Loan" />
      </Flex2>
    </Offer>
  );
}
