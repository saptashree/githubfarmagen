import { Link } from "react-router-dom";
import Home from "../Header/Home";

const MainNav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home1 </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/products"> Products </Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNav;
