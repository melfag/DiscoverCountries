import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <li>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" style={{ textDecoration: "none" }}>
          About
        </Link>
      </li>
    </nav>
  );
}

export default Navbar;
