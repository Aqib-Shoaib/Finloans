import {
  faFacebook,
  faGoogle,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 90vh;
  padding: 10rem;
  background: #fff;
  position: relative;

  @media screen and (max-width: 762px) {
    padding: 3rem;
    height: 150vh;
  }
`;

const Info = styled.span`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.7;
  color: #7a838b;
`;
const FooterTitle = styled.h3`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.2;
  color: #040e27;
`;

const Icons = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-start;
  margin: 2rem 0;

  & .icon {
    font-size: 1.5rem;
    background-color: #fff;
    color: #ddd;
    line-height: 2.5;
    padding: 1rem;
    border: 1px solid #f1f1f1;
    border-radius: 50%;

    &:hover {
      color: #fff;
      background-color: #33d4d6;
    }
  }
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 762px) {
    flex-wrap: wrap;
  }
`;

const CopyRight = styled.p`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2;
  color: #7a838b;
  & span {
    color: #33d4d6;
  }
`;

const Items = styled.span`
  font-size: 1.3rem;
  line-height: 1.2;
  display: inline-block;
  margin: 1rem 0;
  color: #7a838b;
  cursor: pointer;
  &:hover {
    color: #040e27;
  }
`;

const Sect = styled.section`
  display: grid;
  grid-template-columns: 25% 25% auto;
  padding: 0 3rem;
  margin-left: 15rem;

  @media screen and (max-width: 762px) {
    padding: 1rem;
    grid-template-columns: auto;
    margin-left: 1rem;
    gap: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  background: #fff;
  gap: 1.5rem;
  border: 1px solid #aaa;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 5px;
  margin: 2.5rem 0;

  & .input {
    font-size: 1.5rem;
    line-height: 1.4;
    color: #040e27;
    border: none;
    outline: none;
  }

  & .btn {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.3;
    color: #fff;
    background-color: #33d4d6;
    padding: 1rem;
    border: none;
    border-radius: 10px;
  }

  @media screen and (max-width: 762px) {
    margin: 0.5rem;
    gap: 0.5rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Main>
        <InfoBox>
          <img src="/footer_logo.png" alt="footer logo" />
          <Info>aqibibnamjid@gmail.com</Info>
          <Info>+92 304 6164841</Info>
          <Info>Islamabad, UET Taxila</Info>

          <Icons>
            <FontAwesomeIcon className="icon" icon={faFacebook} />
            <FontAwesomeIcon className="icon" icon={faGoogle} />
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </Icons>
        </InfoBox>

        <Sect>
          <InfoBox>
            <FooterTitle>Services</FooterTitle>
            <InfoBox>
              <Items>SEO/SEM</Items>
              <Items>React Js</Items>
              <Items>Express JS</Items>
              <Items>MongoDb</Items>
            </InfoBox>
          </InfoBox>
          <InfoBox>
            <FooterTitle>UseFull Links</FooterTitle>
            <InfoBox>
              <Items>Github</Items>
              <Items>LinkedIn </Items>
              <Items>About</Items>
              <Items>Apply Loan</Items>
            </InfoBox>
          </InfoBox>
          <InfoBox>
            <FooterTitle>Subscribe</FooterTitle>
            <Form action="">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your Email"
                className="input"
              />
              <button className="btn">Subscribe</button>
            </Form>
            <Items>
              Esteem spirit temper too say adieus who direct esteem esteems
              luckily.
            </Items>
          </InfoBox>
        </Sect>
      </Main>
      <div>
        <CopyRight>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          by <span>Colorlib</span>
        </CopyRight>
      </div>
    </StyledFooter>
  );
}
