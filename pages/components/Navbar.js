import Link from "next/link";
import React, {useState} from "react";
import TwitterIcon from "/public/twitter-svgrepo-com.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
         <TwitterIcon color="green" />
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