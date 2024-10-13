/* eslint-disable react/prop-types */

import styled from "styled-components";
import Subtitle from "./Subtitle";

const Number = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  color: #0a8cff;
  background: #ddf0ff;
  border-radius: 50%;
  padding: 3rem;
`;

const ItemHeading = styled.h3`
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 1.2;
  color: #040e27;
  margin-bottom: 0.7rem;
`;
const Item = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  justify-content: center;
`;
export default function WorkItem({ num, heading }) {
  return (
    <Item>
      <Number>{num}</Number>
      <div>
        <ItemHeading>{heading}</ItemHeading>
        <Subtitle>
          We will customize a loan based on the amount of cash your company need
          term
        </Subtitle>
      </div>
    </Item>
  );
}
