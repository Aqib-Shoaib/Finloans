import styled from "styled-components";
import ListBtn from "./ListBtn";

const StyledSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(./loan.png);
  padding: 4rem 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  height: 50vh;

  @media screen and (max-width: 762px) {
    padding: 1.25rem;
    gap: 2rem;
  }
`;

const Text = styled.h4`
  font-weight: 400;
  font-size: 4.4rem;
  line-height: 1.2;
  color: #fff;
  width: 70%;

  @media screen and (max-width: 762px) {
    font-size: 3rem;
  }
`;

export default function ApplySection() {
  return (
    <StyledSection>
      <Text>Apply for Loan Now for a startup, a company or education</Text>

      <ListBtn>Apply Now</ListBtn>
    </StyledSection>
  );
}
