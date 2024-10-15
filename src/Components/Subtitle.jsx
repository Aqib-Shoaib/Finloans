/* eslint-disable react/prop-types */

import styled from "styled-components";

const H3 = styled.h3`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.75;
  color: #7a838b;
  text-align: center;
`;

export default function Subtitle({ children }) {
  return <H3>{children}</H3>;
}
