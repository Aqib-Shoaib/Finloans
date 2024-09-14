import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../Components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useEffect, useState } from "react";

// styles
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.5rem 1rem;
  z-index: 999;
  position: ${($props) => ($props.isSticky ? "fixed" : "")};
  background: ${($props) =>
    $props.isSticky ? "rgba(0,0,0,1)" : "transparent"};
  top: ${({ isSticky }) => (isSticky ? 0 : "")};
  width: 100%;

  & .link {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.53;
    color: #fff;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  & .link:hover {
    color: #33d4d6;
  }

  & .hoverLink {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.53;
    padding: 0.5rem;
    border-radius: 5px;
    color: #000;
    transition: all 0.3 ease;
    &:hover {
      background-color: #33d4d6;
    }
  }

  & .allLinks {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-width: 60%;
    padding: 0.2rem 2rem;
  }
`;

const Number = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.53;
  text-align: center;

  & .icon {
    color: #33d4d6;
    margin-right: 0.5rem;
  }
  & .num {
    color: #fff;
  }
`;
const CallBtn = styled.button`
  border: none;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.53;
  color: #33d4d6;
  background: transparent;
  border: 2px solid #33d4d6;
  padding: 1.3rem;
  transition: all 0.3 linear;
  border-radius: 5px;

  &:hover {
    color: #fff;
    background: #33d4d6;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const Hoverable = styled.div`
  position: relative;

  & .hide {
    display: none;
  }

  & .showlinks {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 7px;
    min-width: 10rem;
    gap: 0.5rem;
    padding: 1rem;
    position: absolute;
    bottom: -8rem;
    right: -1rem;
  }
`;

export default function Nav() {
  const [pagesHovered, setPagesHovered] = useState(false);
  const [blogsHovered, setBlogsHovered] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(function () {
    const handleSticky = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleSticky);

    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  return (
    <StyledNav isSticky={isSticky}>
      <Logo />

      <div className='allLinks'>
        <NavLink to='/' className='link'>
          Home
        </NavLink>
        <NavLink to='/about' className='link'>
          About
        </NavLink>
        <NavLink to='/loans' className='link'>
          Loans
        </NavLink>
        <Hoverable>
          <span className='link' onMouseEnter={() => setPagesHovered(true)}>
            Pages
          </span>
          <div
            className={pagesHovered ? "showlinks" : "hide"}
            onMouseLeave={() => setPagesHovered(false)}
          >
            <NavLink to='/apply-loan' className='hoverLink'>
              Apply Loan
            </NavLink>
            <NavLink to='/elements' className='hoverLink'>
              Elements
            </NavLink>
          </div>
        </Hoverable>
        <Hoverable>
          <span className='link' onMouseEnter={() => setBlogsHovered(true)}>
            Blogs
          </span>
          <div
            className={blogsHovered ? "showlinks" : "hide"}
            onMouseLeave={() => setBlogsHovered(false)}
          >
            <NavLink to='/blog' className='hoverLink'>
              Blog
            </NavLink>
            <NavLink to='/single-blog' className='hoverLink'>
              Single Blog
            </NavLink>
          </div>
        </Hoverable>
        <NavLink to='/faq' className='link'>
          Faq
        </NavLink>
        <NavLink to='/contact' className='link'>
          Contact
        </NavLink>
      </div>
      <Box>
        <Number>
          <span className='icon'>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className='num'>+92 304 6164841</span>
        </Number>

        <CallBtn onClick={() => navigate("/apply-loan")}>
          Apply for Loan
        </CallBtn>
      </Box>
    </StyledNav>
  );
}
