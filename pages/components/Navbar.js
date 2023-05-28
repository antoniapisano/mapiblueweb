import Link from "next/link";
import React, {useState} from "react";
import YoutubeIcon from "/public/youtubeplay.svg";
import InstagramIcon from "/public/instagram2.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
         <YoutubeIcon/><Link href="/about">Youtube</Link>
        <InstagramIcon /><Link href="/shop">Instagram</Link>
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