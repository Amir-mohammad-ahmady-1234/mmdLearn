import Lottie from "lottie-react";
import learnGif from "@/public/gifs/learnGif.json";

export default function SectionOne() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      {/* Text */}
      <div className="w-full md:w-3/5 flex flex-col gap-8">
        <h1 className="text-3xl sm:text-4xl font-bold leading-relaxed text-justify">
          از صفر تا سینیور شدنت با ممی لرن!
        </h1>
        <p className="text-lg sm:text-xl leading-loose text-justify">
          یادگیری برنامه‌نویسی دوی سرعت نیست، دوی ماراتنه! با ممی‌لرن توی زمان
          کمتری به نقطه پایان برس. ما با مسیر یادگیری هدفمند و پروژه‌محور،
          همراهتیم. بدون پیچیدگی‌های الکی، فقط کدی که به دردت می‌خوره رو یاد
          بگیر!
        </p>
      </div>

      {/* Lottie */}
      <div className="w-full md:w-3/5 flex justify-center">
        <Lottie
          animationData={learnGif}
          loop
          className="w-full max-w-[400px] aspect-square"
        />
      </div>
    </div>
  );
}
