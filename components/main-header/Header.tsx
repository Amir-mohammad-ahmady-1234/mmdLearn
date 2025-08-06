"use client";

import { useState } from "react";

import InputAndButtons from "./InputAndButtons";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import CloseOpenSideBar from "./CloseOpenSideBar";
import NavLinks from "./NavLinks";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-primary shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <CloseOpenSideBar setOpen={setIsOpen} />

        <Logo />

        <nav className="hidden lg:flex md:space-x-20 font-bold text-shadow-text">
          <NavLinks />
        </nav>

        <InputAndButtons />

        {isOpen && <MobileNav setOpen={setIsOpen} />}
      </div>
    </header>
  );
}
