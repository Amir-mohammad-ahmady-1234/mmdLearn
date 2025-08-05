"use client";

import { useEffect, useState } from "react";

import DesktopNavigations from "./DesktopNavigations";
import InputAndButtons from "./InputAndButtons";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import CloseOpenSideBar from "./CloseOpenSideBar";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-primary shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <CloseOpenSideBar setOpen={setIsOpen} />

        <Logo />

        <DesktopNavigations />

        <InputAndButtons />

        {isOpen && <MobileNav setOpen={setIsOpen} />}
      </div>
    </header>
  );
}
