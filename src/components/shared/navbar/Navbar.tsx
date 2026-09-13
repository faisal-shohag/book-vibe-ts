"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `font-semibold mr-1 ${pathname === href ? "text-green-500 border border-green-500" : ""}`;

  const links = (
    <>
      <li>
        <Link href={"/"} className={linkClass("/")}>
          Home
        </Link>
      </li>
      <li>
        <Link href={"/books"} className={linkClass("/books")}>
          Listed Books
        </Link>
      </li>
      <li>
        <Link
          href={"/page-to-read"}
          className={linkClass("/page-to-read")}
        >
          Page to Read
        </Link>
      </li>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2 className="font-bold text-xl">Book Vibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4 ">
          <button className="btn btn-success text-white">Signin</button>
          <button className="btn btn-accent text-white">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
