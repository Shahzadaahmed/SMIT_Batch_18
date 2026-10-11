import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <ul>
        <li> <Link href={'/'}> Home </Link> </li>
        <li> <Link href={'/users'}> Users </Link> </li>
        <li> <Link href={'/add-user'}> Add User </Link> </li>
    </ul>
  );
};

export default Navbar;
