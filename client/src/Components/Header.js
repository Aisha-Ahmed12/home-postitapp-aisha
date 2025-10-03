import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../Images/logo-t.png";
const Header = () => {
  return (
    <>
      <Navbar>
        <Nav>
          <img src={logo} />
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/Login">Login</Link>
          </NavItem>
          <NavItem>
            <Link to="Profile">Profile</Link>
          </NavItem>
          <NavItem>
            <Link to="Logout">Logout</Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
