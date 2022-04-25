import React from "react";

const Header = () => {
  return (
    <header className="row">
      <div>
        <a className="brand" href="/">
          Amazona
        </a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
  );
};

export default Header;
