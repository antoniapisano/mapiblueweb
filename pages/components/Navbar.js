import Link from "next/link";
import React, {useState} from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/shop">Shop</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;