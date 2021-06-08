import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
import { Nav, NavItem } from "reactstrap";

const MainNav = () => {
  return (
    <header className={classes.header}>
      <div>
        <img src="/images/Logo.svg" style={{ height: "50px" }} alt="" />
        <Nav>
          <NavItem>
            <NavLink activeClassName={classes.active} to="/" exact={true}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName={classes.active} to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName={classes.active} to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </header>
  );
};
export default MainNav;
