import styled from "styled-components";

const ListBtn = styled.button`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  color: #fff;
  background: #33d4d6;
  border: none;
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 0.5rem;

  &:hover {
    color: #33d4d6;
    background: transparent;
    border: 1px solid #33d4d6;
  }
`;

export default ListBtn;
