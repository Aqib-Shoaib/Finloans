import styled from "styled-components";
import ListBtn from "./ListBtn";
import ListItem from "./ListItem";
import Subtitle from "./Subtitle";
import Title from "./Title";

const StyledSection = styled.section`
  padding: 5rem;
  display: flex;
  gap: 10rem;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export default function ChooseSection() {
  return (
    <StyledSection>
      <div>
        <img src="./about.png" alt="about us image" />
      </div>
      <Main>
        <Title>Why Choose Us?</Title>
        <Subtitle>
          Esteem spirit temper too say adieus who direct esteem.It esteems
          luckily or picture placing drawing. Apartments frequently or
          motionless on reasonable.
        </Subtitle>

        <ul>
          <ListItem clr="#040e27">Loans with quick approval.</ListItem>
          <ListItem clr="#040e27">
            Customize a loan based on the amount.
          </ListItem>
          <ListItem clr="#040e27">
            Good credit profile and you have built your loan.
          </ListItem>
          <ListItem clr="#040e27">
            We provide online instant cash loans.
          </ListItem>
        </ul>

        <ListBtn>Apply Now</ListBtn>
      </Main>
    </StyledSection>
  );
}
