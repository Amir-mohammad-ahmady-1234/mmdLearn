import { courses } from "@/data/courses";
import CoursesList from "./CoursesList";
import CoursesHeader from "./CoursesHeader";


export default function Courses() {
  return (
    <>
      <CoursesHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {courses.map((course) => (
          <CoursesList course={course} key={course.id} />
        ))}
      </div>
    </>
  );
}
