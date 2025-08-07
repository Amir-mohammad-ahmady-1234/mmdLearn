import { CoursesType } from "@/types/coursesType";

export const courses: CoursesType[] = [
  {
    id: "gev2tre26",
    title: "آموزش جامع ReactJS",
    src: "",
    desc: "توی این دوره جامع تمام مباحث پایه‌ای مربوط به React گفته میشه و بعد ابزارها و لایبرری‌های حرفه‌ای این کتابخونه عظیم تدریس خواهد شد.",
    headLines: `
      فصل اول: چرا باید از ری‌اکت استفاده کنیم؟ دقیقا چه فرقی با JS داره؟
      فصل دوم: آموزش stateها در ری‌اکت
      فصل سوم: Context API چیست؟
      فصل چهارم: آموزش Redux & Redux Toolkit
      فصل پنجم: React Query و طرز کار اون
      فصل ششم: مرحله بعدی چیست؟
    `,
    teacher: "علی رفیعی",
    students: 167,
    price: 4_500_000,
    time: 8,
    category: ["front-end", "library"],
    Discount: 25,
  },
  {
    id: "wef4gft89",
    title: "آموزش Next.js 15",
    src: "",
    desc: "توی این دوره از پایه تا پیشرفته‌ترین مفاهیم Next.js 15 رو یاد می‌گیریم، از ساختار فایل‌ها تا SSR، API Route و احراز هویت.",
    headLines: `
      فصل اول: ساختار و فلسفه Next.js
      فصل دوم: صفحات و Route‌ها
      فصل سوم: رندرینگ سمت سرور
      فصل چهارم: استفاده از دیتابیس با Prisma
      فصل پنجم: احراز هویت با JWT و Supabase
      فصل ششم: دیپلوی و بهینه‌سازی
    `,
    teacher: "حسین میری",
    students: 224,
    price: 6_000_000,
    time: 15,
    category: ["front-end", "framework"],
  },
  {
    id: "klz2rte52",
    title: "آموزش TypeScript برای دولوپرهای React",
    src: "",
    desc: "تو این دوره یاد می‌گیری چطور با TypeScript کدت رو ایمن‌تر، سریع‌تر و بدون باگ بنویسی. مخصوص دولوپرهای فرانت‌اند.",
    headLines: `
      فصل اول: مقدمات TypeScript
      فصل دوم: انواع داده‌ها و Interface
      فصل سوم: Type Narrowing و Assertion
      فصل چهارم: استفاده از TS در پروژه‌های React
      فصل پنجم: Generics و مفاهیم پیشرفته
      فصل ششم: Best Practices و Refactoring
    `,
    teacher: "زهرا صادقی",
    students: 143,
    price: 1_200_000,
    time: 3,
    category: ["front-end", "backend", "web-language"],
  },
  {
    id: "lmx3vnb72",
    title: "دوره پروژه محور Tailwind CSS 4",
    src: "",
    desc: "توی این دوره با Tailwind CSS یه عالمه پروژه طراحی می‌کنیم و یاد می‌گیریم چطوری رابط‌های کاربری تمیز و رسپانسیو بسازیم.",
    headLines: `
      فصل اول: فلسفه Utility-first
      فصل دوم: ریسپانسیو با Breakpoints
      فصل سوم: ساختن کامپوننت‌های کاربردی
      فصل چهارم: انیمیشن و موشن
      فصل پنجم: طراحی داشبورد و فرم‌های خفن
      فصل ششم: طراحی نسخه موبایل و تاریک
    `,
    teacher: "میلاد درویش",
    students: 198,
    price: 2_999_000,
    time: 7,
    category: ["front-end", "framework"],
    Discount: 70,
  },
  {
    id: "vbn3asq09",
    title: "آموزش Git و GitHub از صفر تا Deployment",
    src: "",
    desc: "اگر هنوز با Git درگیری، این دوره برات نجات‌دهنده‌ست. کامل‌ترین آموزش Git برای دولوپرها با کلی تمرین کاربردی.",
    headLines: `
      فصل اول: مقدمات Git و نصب ابزار
      فصل دوم: کار با Repository ها
      فصل سوم: Branch و Merge بدون دردسر
      فصل چهارم: کار با GitHub و Pull Request
      فصل پنجم: رفع Conflict و Stash کردن
      فصل ششم: دیپلوی پروژه‌ها در Vercel و Netlify
    `,
    teacher: "سجاد نوری",
    students: 310,
    price: 500_000,
    time: 2,
    category: ["front-end", "backend", "version-control"],
  },
  {
    id: "rtu2fty88",
    title: "آموزش Firebase و ساخت اپلیکیشن فول‌استک",
    src: "",
    desc: "یاد می‌گیری چطوری با Firebase یه اپ واقعی بسازی، از دیتابیس Realtime تا احراز هویت و ذخیره‌سازی فایل.",
    headLines: `
      فصل اول: معرفی Firebase و نصب ابزارها  
      فصل دوم: کار با Firestore (دیتابیس NoSQL)  
      فصل سوم: Authentication و نقش کاربران  
      فصل چهارم: مدیریت فایل‌ها و Storage  
      فصل پنجم: ارتباط با React و Context  
      فصل ششم: دیپلوی پروژه با Firebase Hosting
    `,
    teacher: "مریم اسدی",
    students: 186,
    price: 1_000_000,
    time: 4,
    category: ["backend", "full-stack"],
  },
  {
    id: "plm4rte19",
    title: "آموزش کامل JavaScript مدرن",
    src: "",
    desc: "قبل از هر فریم‌ورکی، باید JS رو بشناسی! این دوره صفر تا صد JavaScript رو به شیوه‌ای مدرن و پروژه‌محور یادت می‌ده.",
    headLines: `
      فصل اول: مفاهیم پایه مثل متغیر و شرط  
      فصل دوم: توابع، Scope و Closure  
      فصل سوم: آرایه‌ها، آبجکت‌ها و حلقه‌ها  
      فصل چهارم: توابع async/await و Promise  
      فصل پنجم: DOM و event‌ها  
      فصل ششم: ساخت پروژه To-Do لیست و دیپلوی
    `,
    teacher: "امیررضا کاظمی",
    students: 294,
    price: 6_000_000,
    time: 30,
    category: ["front-end", "language"],
  },
  {
    id: "bnm6vds73",
    title: "آموزش Sass و سازماندهی استایل‌ها",
    src: "",
    desc: "Sass ابزار فوق‌العاده‌ایه برای مدیریت استایل‌های بزرگ. با این دوره از CSS خسته‌کننده نجات پیدا می‌کنی.",
    headLines: `
      فصل اول: نصب Sass و مفاهیم اولیه  
      فصل دوم: استفاده از متغیرها، mixin و functions  
      فصل سوم: Nesting و ساختار BEM  
      فصل چهارم: استفاده در پروژه React  
      فصل پنجم: ساخت سیستم Design خودت  
      فصل ششم: بیلد و خروجی‌گیری با Vite
    `,
    teacher: "آرش رضوی",
    students: 132,
    price: 250_000,
    time: 6,
    category: ["front-end"],
  },
  {
    id: "qwe9poi62",
    title: "آموزش طراحی ریسپانسیو با HTML و CSS",
    src: "",
    desc: "یاد می‌گیری چطور بدون فریم‌ورک، خودت ریسپانسیو‌ترین سایت‌ها رو با HTML و CSS بنویسی.",
    headLines: `
      فصل اول: اصول Flexbox و Grid  
      فصل دوم: Media Query چیه و چطور کار می‌کنه  
      فصل سوم: طراحی صفحات مختلف برای موبایل و دسکتاپ  
      فصل چهارم: ساخت navbar واکنش‌گرا  
      فصل پنجم: طراحی فرم‌ها و صفحات لاگین  
      فصل ششم: تمرین پروژه محور و دیزاین تمیز
    `,
    teacher: "سعید مرادی",
    students: 174,
    price: 2_500_000,
    time: 20,
    category: ["front-end"],
    Discount: 100,
  },
  {
    id: "xcz7lkj55",
    title: "مینی دوره کاربردی GitHub Actions",
    src: "",
    desc: "CI/CD رو تو پروژه‌هات با GitHub Actions پیاده کن. اتومات کن دیپلوی‌هات رو مثل حرفه‌ای‌ها!",
    headLines: `
      فصل اول: آشنایی با مفاهیم CI/CD  
      فصل دوم: ساخت اولین Workflow  
      فصل سوم: استفاده از Secret ها  
      فصل چهارم: اتومات کردن تست و Build  
      فصل پنجم: اتصال به Vercel یا Netlify  
      فصل ششم: سناریوهای پیشرفته برای دولوپرها
    `,
    teacher: "رضا سلطانی",
    students: 95,
    price: 500_000,
    time: 2,
    category: ["devOps", "CI", "CD"],
    Discount: 10,
  },
];
