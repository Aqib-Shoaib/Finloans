import styled from "styled-components";
import Nav from "../Layout/Nav";

const Banner = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(/banner.png);
  height: 150vh;
  background-position: center;
  background-size: cover;
`;

export default function BannerHome() {
  return (
    <Banner>
      <Nav />
    </Banner>
  );
}
