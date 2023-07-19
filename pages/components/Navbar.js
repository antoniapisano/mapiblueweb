import React, {useState} from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
        <ul>
          <li>
        <a href="https://www.youtube.com/@jamesevansmusic231">Youtube</a>
        </li>
        <li>
        <a href="https://www.instagram.com/james_evans_music/?hl=en">Instagram</a>
        </li>
        </ul>
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