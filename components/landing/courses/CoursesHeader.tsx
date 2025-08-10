import Link from "next/link";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";

import { Button } from "@/components/ui/button";

export default function CoursesHeader() {
  return (
    <div className="flex items-center justify-between m-10 gap-5">
      <span className="md:p-10 font-extrabold [text-shadow:_1px_0_blue,_-1px_0_green,_0_1px_blue,_0_-1px_gold] text-xl md:text-5xl leading-10 text-text-gold underline underline-offset-[20px] decoration-2 decoration-text-gold">
        اخرین دوره ها
      </span>
      <Link href="courses">
        <Button className="text-secondary cursor-pointer">
          مشاهده همه{" "}
          <MdOutlineCallMissedOutgoing className="size-5 animate-bounce" />
        </Button>
      </Link>
    </div>
  );
}
