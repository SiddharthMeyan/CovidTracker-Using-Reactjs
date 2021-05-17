import React from "react";

const Navbar = ({ search, setSearch, handleSearch }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Covid Tracker</a>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
