"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Post",
      href: "/posts",
    },
    {
      title: "Meals",
      href: "/meals",
    },
    {
      title: "About",
      href: "/about",
    },
  ];
  const handler = () => {
    router.push("/about");
  };
  if (pathName.includes("/dashboard"))
    return (
      <div>
        <h1 className="text-red-300 bg-fuchsia-400">dashboard</h1>
      </div>
    );
  return (
    <nav className="bg-red-400 flex justify-between items-center px-4">
      <h6 className="text-3xl">
        Next <span className="text-cyan-300"> Meal</span>
      </h6>
      <ul className="flex justify-center space-x-4 py-4 px-2 cursor-pointer">
        {links?.map((link) => (
          <Link
            className={`${pathName === link?.href && "text-cyan-300"}`}
            key={link?.href}
            href={link?.href}
          >
            {link?.title}
          </Link>
        ))}
      </ul>
      <button onClick={handler} className="text-cyan-400 bg-white  py-2 px-2">
        LogIn
      </button>
    </nav>
  );
};

export default Navbar;
