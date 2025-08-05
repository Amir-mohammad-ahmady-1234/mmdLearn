import ToggleTheme from "./ToggleTheme";

import { Input } from "../ui/input";
import { CiLogin } from "react-icons/ci";
import { Button } from "../ui/button";
import Link from "next/link";

const InputAndButtons = () => {
  return (
    <div className="flex items-center space-x-8 mr-2">
      <Input
        type="search"
        placeholder="جستجو ..."
        className="hidden md:block w-72 bg-surface text-text p-4 rounded-4xl border-none shadow-2xl focus:shadow-xl !outline-none !ring-0"
      />

      <div className="hidden md:block ">
        <ToggleTheme />
      </div>

      <Button
        variant="link"
        className="bg-surface rounded-2xl flex item-center justify-center"
      >
        <Link href="login">ورود | ثبت نام</Link>
        <CiLogin />
      </Button>
    </div>
  );
};

export default InputAndButtons;
