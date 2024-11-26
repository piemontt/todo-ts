import styled from "styled-components";
import { Link } from "react-router-dom";
import { FunctionComponent } from "react";

const Header = styled.div`
  background-color: #42aaff;
  border-bottom-right-radius: 16px;
  background-color: #42aaff;
  border-bottom-left-radius: 16px;
  padding: 32px 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: 30px;
  color: #ffffff;
`;

const Menu = styled.ul`
  display: flex;
  column-gap: 32px;
`;

const MenuPoint = styled.li`
transition: 0.3s all;
  list-style-type: none;
  cursor: pointer;
  text-decoration: none;
  &:first-child {
    font-weight: bold;
    border-right: 1px solid #ffffff;
    padding-right: 32px;
  }
  &:hover {
    opacity: 0.6;
  }
`;

const Head: FunctionComponent = () => {
  return (
    <Header>
      <Menu>
        <MenuPoint>
          <StyledLink to={"/"}>List</StyledLink>
        </MenuPoint>
        <MenuPoint>
          <StyledLink to={"/configure"}>Edit</StyledLink>
        </MenuPoint>
      </Menu>
    </Header>
  );
};
export default Head;
