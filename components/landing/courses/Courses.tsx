import { courses } from "@/data/courses";
import CoursesList from "./CoursesList";
import CoursesHeader from "./CoursesHeader";

export default function Courses() {
  return (
    <>
      <CoursesHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 place-items-center">
        {courses.map((course) => (
          <CoursesList course={course} key={course.id} />
        ))}
      </div>
    </>
  );
}
