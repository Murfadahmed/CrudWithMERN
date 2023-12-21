import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111;
  position:static;
`;
const Tabs = styled(NavLink)`
  font-sixe: 30px;
  margin-right: 20px;
  color: white;
`;
function Navbar() {
  return (
    <div>
      <Header>
        <Toolbar>
          <Tabs to="/">Logo</Tabs>
          <Tabs to="/add-user">Add User</Tabs>
          <Tabs to="/all-user">All User</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
}

export default Navbar;
