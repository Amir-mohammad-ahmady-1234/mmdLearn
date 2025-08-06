import { Dispatch, SetStateAction } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../ui/input";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import ToggleTheme from "./ToggleTheme";

export default function MobileNav({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-on-primary shadow-2xl z-50"
      >
        <div className="flex flex-col p-6 space-y-6">
          <div className="flex flex-col items-end">
            <FaRegWindowClose
              className="text-xl cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="flex flex-col item-center justify-center space-y-4">
            <Logo />
            <Input
              type="search"
              placeholder="دنبال چی میگردی ؟"
              className="bg-surface text-text p-4 rounded-4xl border-border shadow-shadow shadow-xl focus:shadow-2xl !outline-none !ring-0"
            />
          </div>

          <div className="border border-border border-x-0 py-6 flex items-center justify-around">
            <span className="text-text">تعویض تم سایت</span>
            <ToggleTheme />
          </div>
          <NavLinks />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
