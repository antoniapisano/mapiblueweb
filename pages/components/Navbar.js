import Link from "next/link";

const Navbar = () => {


  return (
   <nav>
    <Link href="/">Home</Link>
    <Link href="/shop">Shop</Link>
    <Link href="/about">About</Link>
    </nav>
  );
};

export default Navbar;