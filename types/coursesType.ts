export interface CoursesType {
  id: string;
  title: string;
  src: string;
  desc: string;
  headLines: string;
  teacher: string;
  students: number;
  price: number;
  time: number;
  category: string[];
  Discount?: number;
}
