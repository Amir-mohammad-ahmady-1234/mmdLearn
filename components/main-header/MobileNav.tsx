import { Dispatch, SetStateAction } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

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
          <FaRegWindowClose
            className="text-xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
