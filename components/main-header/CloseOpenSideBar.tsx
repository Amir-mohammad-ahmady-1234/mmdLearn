"use client";

import { CiBoxList } from "react-icons/ci";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";

const CloseOpenSideBar = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Button
      variant={"outline"}
      className="block lg:hidden cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
    >
      <CiBoxList />
    </Button>
  );
};

export default CloseOpenSideBar;
