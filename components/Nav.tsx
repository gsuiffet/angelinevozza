import Menu from "assets/menu.svg";
import Drawer from "components/Drawer";
import Link from "components/Link";
import { ROUTES } from "constants/routes";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Wave from "assets/wave.svg";
import Contact from "./Contact";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const content = (
    <>
      {Object.values(ROUTES.nav).map((entry) => (
        <Link
          key={entry}
          href={`/${entry}`}
          className="relative flex justify-center items-end"
        >
          <p className="text-black first-letter:capitalize">{entry}</p>
          {pathname.endsWith(entry) && <Wave className="absolute -mb-3 md:-mb-2"/>}
        </Link>
      ))}
      <Contact />
    </>
  );

  return (
    <>
      <nav className="space-x-2 lg:space-x-6 hidden flex items-center md:flex">{content}</nav>
      <Menu
        onClick={toggleOpen}
        width={40}
        height={40}
        className="md:hidden cursor-pointer"
      />
      <Drawer open={open} onClose={toggleOpen}>
        <div className="flex flex-col h-screen items-end space-y-9 pr-8 pt-8">
          {content}
        </div>
      </Drawer>
    </>
  );
};

export default Nav;
