import styled from "styled-components";
import Subtitle from "./Subtitle";

const Btn = styled.button`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  color: #fff;
  border: 1px solid #33d4d6;
  background: #33d4d6;
  transition: all 0.3 ease;
  padding: 1.3rem 2rem;

  &:hover {
    background: transparent;
    color: #33d4d6;
  }
`;
const H2 = styled.h2`
  font-size: 3rem;
  line-height: 1.2;
  color: #040e27;
`;

const StyledHeroForm = styled.div`
  background: #fff;
  border: 7px;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Select = styled.select`
  font-size: 1.4rem;
  line-height: 3.57;
  color: #7a838b;
  padding: 1.5rem;
  margin: 1rem;
`;

export default function HeroForm() {
  return (
    <StyledHeroForm>
      <H2>How much do you want</H2>
      <Subtitle>We provide online instant cash loans with quick</Subtitle>
      <Select>
        <option value='Amount'>Amount</option>
        <option value='10$'>10$</option>
        <option value='20$'>20$</option>
        <option value='30$'>30$</option>
      </Select>
      <Select>
        <option value='Months'>Months</option>
        <option value='3-months'>3 Months</option>
        <option value='6-months'>6 Months</option>
        <option value='9-months'>9 Months</option>
      </Select>

      <Subtitle>You have to pay $0</Subtitle>

      <Btn>Continue</Btn>
    </StyledHeroForm>
  );
}
