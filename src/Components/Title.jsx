/* eslint-disable react/prop-types */

import styled from "styled-components";

const Heading = styled.h2`
  font-weight: 400;
  font-size: 4.4rem;
  line-height: 1.2;
  color: #001d38;
  text-align: center;
`;

export default function Title({ children, className = "" }) {
  return <Heading className={className}>{children}</Heading>;
}
