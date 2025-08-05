'use client'

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function MainHeader() {
  const [isDark, setIsDark] = useState()

  return (
    <header className="w-full bg-on-primary shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-success cursor-pointer">
          MyBrand 
        </div>

        <nav className="hidden md:flex space-x-8 text-shadow-text font-medium">
          <div onClick={() => document.body.classList.toggle('dark')}>change theme</div>
          <a href="#home" className="hover:text-text transition-colors">
            خانه
          </a>
          <a href="#features" className="hover:text-text transition-colors">
            امکانات
          </a>
          <a href="#pricing" className="hover:text-text transition-colors">
            قیمت‌ها
          </a>
          <a href="#contact" className="hover:text-text transition-colors">
            تماس
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Input
            type="search"
            placeholder="جستجو..."
            className="hidden md:block w-48"
          />
          <Button variant="default">ورود</Button>
        </div>
      </div>
    </header>
  );
}
