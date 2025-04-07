import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MyPay</h1> {/* MyPay title */}
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/transaction">Transaction</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
