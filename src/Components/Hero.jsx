import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeroText = styled.h1`
  font-weight: 400;
  font-size: 6rem;
  line-height: 1.3;
  color: #fff;
  margin: 1rem;

  @media screen and (max-width: 762px) {
    font-size: 3rem;
  }
`;
const HeroBtn = styled.button`
  border: none;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.53;
  color: #33d4d6;
  border: 1px solid #33d4d6;
  border-radius: 5px;
  padding: 1.2rem;
  background: transparent;
  margin: 1rem;

  &:hover {
    background: #33d4d6;
    color: #fff;
  }
`;
const StyledHero = styled.div`
  padding: 5rem;

  @media screen and (max-width) {
    padding: 1.5rem;
  }
`;

export default function Hero() {
  const navigate = useNavigate();
  return (
    <StyledHero>
      <HeroText>Get Loan For Your Business growth or Your Startup</HeroText>
      <HeroBtn onClick={() => navigate("/apply-loan")}>how It works</HeroBtn>
    </StyledHero>
  );
}
