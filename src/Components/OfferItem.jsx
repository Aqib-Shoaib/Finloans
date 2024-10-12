/* eslint-disable react/prop-types */

import styled from "styled-components";
import ListItem from "./ListItem";
import ListBtn from "./ListBtn";

const Item = styled.article`
  background: linear-gradient(rgb(10, 137, 249), rgb(6, 75, 137));
  border-radius: 1.5rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h4`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: #fff;
`;
const LoanPrice = styled.span`
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.2;
  color: #33d4d6;
`;

export default function OfferItem({ image, title }) {
  return (
    <Item>
      <img src={image} alt="service icon" />
      <Title>{title}</Title>
      <LoanPrice>$3000-$10000</LoanPrice>
      <ul>
        <ListItem>Borrow - $350 over 3 months</ListItem>
        <ListItem>Interest rate - 292% pa fixed</ListItem>
        <ListItem>Total amount payable - $525.12</ListItem>
        <ListItem>Representative - 1,286% APR</ListItem>
      </ul>

      <ListBtn>Apply Now</ListBtn>
    </Item>
  );
}
