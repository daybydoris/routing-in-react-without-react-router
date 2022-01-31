import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="header">
      <div className="navigation">
        <Link href="/" className="item">
          About
        </Link>
        <Link href="/contents" className="item">
          Contents
        </Link>
        <Link href="/gallery" className="item">
          Gallery
        </Link>
        <Link href="/all" className="item">
          All
        </Link>
      </div>
    </div>
  );
};

export default Header;