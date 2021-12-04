import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className=" navbar navbar-expand-lg light bg-light bg-opacity-50">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            Explo-vid
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ms-lg-6 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/localvideo"
                >
                  local vedio
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/apivideo"
                >
                  Api vedio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
