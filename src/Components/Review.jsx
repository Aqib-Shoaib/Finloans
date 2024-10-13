/* eslint-disable react/prop-types */
import styled from "styled-components";

const Text = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2;
  color: #040e27;
`;

const Author = styled.h4`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: #7a838b;
`;
const Div = styled.div`
  position: relative;

  &::after {
    content: "”";
    position: absolute;
    right: -5px;
    bottom: 5px;
    background: #33d4d6;
    border-radius: 50%;
    z-index: 1;
    color: #fff;
    font-size: 4rem;
    line-height: 1;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

const Img = styled.img`
  max-width: 100%;
`;

const StyledReview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 3rem;
`;

export default function Review({ author }) {
  return (
    <StyledReview>
      <Div>
        <Img src="./author.png" alt="author image" />
      </Div>
      <div>
        <Text>
          &quot;Working in conjunction with humanitarian aid agencies, we have
          supported programmes to help alleviate human suffering through animal
          welfare when people might depend on livestock as their only source of
          income or food.&quot;
        </Text>
        <Author>- {author}</Author>
      </div>
    </StyledReview>
  );
}
