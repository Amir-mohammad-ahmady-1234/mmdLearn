import { CoursesType } from "@/types/coursesType";
import { convertNumberToPrice } from "@/utils/formatPrice";
import { GiSandsOfTime } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";

export default function CoursesList({ course }: { course: CoursesType }) {
  return (
    <div className="flex flex-col items-center justify-center border border-border rounded-2xl w-full max-w-[500px]">
      <div className="w-[80%] h-full p-4 flex flex-col items-center justify-center">
        <img className="w-full h-4/6" src={"/favicon.ico"} alt={course.title} />
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
