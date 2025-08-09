"use client";

import { CiBoxList } from "react-icons/ci";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";
import { PiListLight } from "react-icons/pi";

const CloseOpenSideBar = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Button
      className="block lg:hidden cursor-pointer mr-2 scale-120"
      onClick={() => setOpen((prev) => !prev)}
    >
      <PiListLight />
    </Button>
  );
};

export default CloseOpenSideBar;
