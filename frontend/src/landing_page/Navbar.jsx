import { Link } from "react-router-dom";

const glass = {
  height: "75px",
  background: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  zIndex: "1000",
  padding: "10px 20px",
  borderBottom: "solid rgba(255, 255, 255, 0.13) 1px",
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={glass}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex  " to="/">
          <img
            src="images/azure.svg"
            className="mx-3"
            alt="Azure"
            style={{ width: "2rem" }}
          />
          <h4 style={{ color: "#2fa6e6", marginTop: "0.5rem" }}>
            Azure Student Chapter
          </h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mx-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav d-flex justify-content-end w-100 me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/" style={{ color: "white" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "white" }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "white" }}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/join" style={{ color: "white" }}>
                Join Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "white" }}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
