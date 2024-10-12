/* eslint-disable react/prop-types */
import styled from "styled-components";
import Nav from "../Layout/Nav";

const Banner = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(./about.png);
  height: 70vh;
  background-position: center;
  background-size: cover;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 6rem;
  line-height: 1.2;
  font-weight: 400;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

export default function BannerCommon({ heading }) {
  return (
    <Banner>
      <Nav />
      <Div>
        <H1>{heading}</H1>
      </Div>
    </Banner>
  );
}
