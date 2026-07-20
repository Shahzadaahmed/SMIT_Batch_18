import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link href={"/"}> Home </Link>
            </li>
            <li>
                <Link href={"/about"}> About </Link>
            </li>
            <li>
                <Link href={"/contact"}> Contact </Link>
            </li>
            <li>
                <Link href={"/contact/profile"}> Profile </Link>
            </li>
            <li>
                <Link href={"/users"}> Users </Link>
            </li>
            <li>
                <Link href={"/services"}> Services </Link>
            </li>
            <li>
                <Link href={"/new-users"}> New Users </Link>
            </li>
            <li>
                <Link href={"/animation"}> Text Animation </Link>
            </li>
            <li>
                <Link href={"/signup"}> Sign Up </Link>
            </li>
            <li>
                <Link href={"/login"}> Log In </Link>
            </li>
        </ul>
    );
};

export default Navbar;