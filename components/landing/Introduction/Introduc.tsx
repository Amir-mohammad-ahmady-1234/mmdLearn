"use client";

import Lottie from "lottie-react";
import learnGif from "@/public/gifs/learnGif.json";
import programming from "@/public/gifs/Programming.json";

const Introduc = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-24 text-text">
      {/* Section 1 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          <h1 className="text-3xl sm:text-4xl font-bold leading-relaxed">
            از صفر تا سینیور شدنت با ممی لرن! <br />
            مسیر یادگیری رو با پروژه‌های واقعی و راهنمایی‌های دقیق طی کن.
          </h1>
          <p className="text-lg sm:text-xl leading-loose text-justify">
            یادگیری برنامه‌نویسی دوی سرعت نیست، دوی ماراتنه! با ممی‌لرن توی زمان
            کمتری به نقطه پایان برس. ما با مسیر یادگیری هدفمند و پروژه‌محور،
            همراهتیم. بدون پیچیدگی‌های الکی، فقط کدی که به دردت می‌خوره رو یاد
            بگیر!
          </p>
        </div>

        {/* Lottie */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Lottie
            animationData={learnGif}
            loop
            className="w-full max-w-[400px] aspect-square"
          />
        </div>
      </div>

      {/* Section 2 */}
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
            یاد بگیر و از مسیرت لذت ببر. یادگیری شیرین‌تر می‌شه وقتی بدون
            سردرگمی جلو بری و دقیق بدونی قراره چی یاد بگیری و چرا.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduc;
