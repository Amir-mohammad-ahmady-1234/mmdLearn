import { CoursesType } from "@/types/coursesType";

export default function CoursesList({ course }: { course: CoursesType }) {
  return (
    <div className="flex flex-col items-center justify-center border w-full text-text">
      <img src={course.src ?? "someImage"} alt={course.title} />

      <h1>{course.title}</h1>
      <span>{course.price}</span>
      <span>{course.time}</span>
      <p>{course.desc}</p>
    </div>
  );
}
