import styled from "styled-components";
import Subtitle from "./Subtitle";
import Title from "./Title";
import WorkItem from "./WorkItem";

const WorkItems = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 762px) {
    flex-direction: column;
  }
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
  padding: 7rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export default function WorkSection() {
  return (
    <Main>
      <Box>
        <Title>How It Works</Title>
        <Subtitle>
          We provide online instant cash loans with quick approval that suit
          your term
        </Subtitle>
      </Box>
      <WorkItems>
        <WorkItem num="1" heading="Apply for loan" />
        <WorkItem num="2" heading="Application review" />
        <WorkItem num="3" heading="Get Funding fast" />
      </WorkItems>
    </Main>
  );
}
