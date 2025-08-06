"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState<string>("");

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      setIsDark(theme);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark === "dark");
  }, [isDark]);

  function handleChangeTheme() {
    setIsDark((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", isDark === "dark" ? "light" : "dark");
  }

  return (
    <Button
      className="max-w-10 scale-[1.5] cursor-pointer"
      onClick={handleChangeTheme}
    >
      {isDark === "light" ? (
        <MdDarkMode fill="black" />
      ) : (
        <MdLightMode fill="white" />
      )}
    </Button>
  );
}
