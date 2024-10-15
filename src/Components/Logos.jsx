import styled from "styled-components";

const StyledLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 5rem;

  @media screen and (max-width: 762px) {
    flex-wrap: wrap;
    gap: 0;
    padding: 0;
  }
`;

export default function Logos() {
  return (
    <StyledLogos>
      <img src="./1.png" alt="" />
      <img src="./2.png" alt="" />
      <img src="./3.png" alt="" />
      <img src="./4.png" alt="" />
      <img src="./5.png" alt="" />
    </StyledLogos>
  );
}
