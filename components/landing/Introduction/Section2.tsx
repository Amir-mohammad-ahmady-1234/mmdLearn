import Lottie from "lottie-react";
import programming from "@/public/gifs/Programming.json";

export default function SectionTow() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Lottie */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Lottie
          animationData={programming}
          loop
          className="w-full max-w-[400px] aspect-square"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        <h1 className="text-3xl sm:text-4xl font-bold leading-relaxed">
          با ممی‌لرن، برنامه‌نویسی رو از صفر تا سینیور مثل آب خوردن یاد بگیر!{" "}
          <br />
          تجربه کن، تمرین کن، و به سرعت حرفه‌ای شو.
        </h1>
        <p className="text-lg sm:text-xl leading-loose text-justify">
          برنامه‌نویسی قرار نیست سخت و خسته‌کننده باشه! با ممی‌لرن قدم‌به‌قدم
          یاد بگیر و از مسیرت لذت ببر. یادگیری شیرین‌تر می‌شه وقتی بدون سردرگمی
          جلو بری و دقیق بدونی قراره چی یاد بگیری و چرا.
        </p>
      </div>
    </div>
  );
}
