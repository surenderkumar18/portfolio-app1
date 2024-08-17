import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1600px;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: rgb(28, 77, 160);
  height: 28px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

const NavBottomSpacer = styled.div`
  height: 20px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  transition: color 0.3s ease;
  font-size: 16px;
  font-weight: 600;

  &.active {
    color: #dc2626;
    border-bottom: 5px #dc2626 solid;
    border-radius: 0;
    text-align: center;
  }

  &:hover {
    color: #007bff;
  }
`;

const AddItem = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: #dc2626;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #b91c1c;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavContainer>
        <NavList>
          <NavItem>
            <NavLinkStyled to='/' exact>
              Home
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to='/dashboard' exact>
              Dashboard
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to='/history'>History</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to='/actions'>Next Action</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to='/calendar'>Calendar</NavLinkStyled>
          </NavItem>
        </NavList>
        <Logo>
          <AddItem>
            <Button onClick={() => navigate("/positions/add")}>
              Add Position
            </Button>
          </AddItem>
        </Logo>
      </NavContainer>
      <NavBottomSpacer />
    </>
  );
};

export default Navigation;
