import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Lg = styled.span`
  font-size: 1.6rem;
  line-height: 1.5;
  cursor: pointer;
`;

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Lg onClick={() => navigate("/")}>
      <img src='/logo.png' alt='nav logo' />;
    </Lg>
  );
}
