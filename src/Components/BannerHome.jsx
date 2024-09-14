import styled from "styled-components";
import Nav from "../Layout/Nav";
import Hero from "./Hero";
import HeroForm from "./HeroForm";

const Banner = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(/banner.png);
  height: 150vh;
  background-position: center;
  background-size: cover;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  place-items: center;
  gap: 2rem;
  padding: 5rem;
`;

export default function BannerHome() {
  return (
    <Banner>
      <Nav />
      <Flex>
        <Hero />
        <HeroForm />
      </Flex>
    </Banner>
  );
}
