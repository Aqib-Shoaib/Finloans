/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledListItem = styled.li`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2;
  color: ${($props) => $props.clr || "#fff"};
`;

export default function ListItem({ children, clr }) {
  return <StyledListItem clr={clr}>{children}</StyledListItem>;
}
