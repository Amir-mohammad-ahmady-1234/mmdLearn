import Image from "next/image";

import { PiStudent } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";

import { CoursesType } from "@/types/coursesType";
import { convertNumberToPrice } from "@/utils/formatPrice";

export default function CoursesList({ course }: { course: CoursesType }) {
  return (
    <div className="flex flex-col items-center justify-center border border-border rounded-2xl w-full max-w-[500px]">
      <div className="flex flex-col items-center justify-center">
        <Image className="rounded-2xl" src={course.src} alt={course.title} width={400} height={0} />
      </div>

      <div className="p-4 space-y-4">
        <h1 className="font-bold text-xl">{course.title}</h1>
        <div className="flex items-center justify-between opacity-70">
          <span>
            قیمت:{" "}
            <span className="font-extrabold">
              {convertNumberToPrice(course.price)}
            </span>{" "}
            تومان
          </span>
          <span className="flex items-center justify-center">
            <GiSandsOfTime /> زمان دوره: {course.time} ساعت
          </span>
        </div>
        <p>{course.desc}</p>

        <p className="flex items-center justify-start gap-1">
          <PiStudent />
          {course.students}
        </p>
      </div>
    </div>
  );
}
