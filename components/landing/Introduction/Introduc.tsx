"use client";

import Lottie from "lottie-react";
import learnGif from "@/public/gifs/learnGif.json";
import programming from "@/public/gifs/Programming.json";

const Introduc = () => {
  return (
    <>
      <div className="flex items-center justify-between text-text">
        <span className="w-2/3 flex flex-col gap-10 m-10">
          <h1 className="text-4xl">
            از صفر تا سینیور شدنت با ممی لرن! مسیر یادگیری رو با پروژه‌های واقعی
            و راهنمایی‌های دقیق طی کن.
          </h1>

          <p>
            یادگیری برنامه‌نویسی دوی سرعت نیست، دوی ماراتنه! با ممی‌لرن توی زمان
            کمتری به نقطه پایان برس. ما با مسیر یادگیری هدفمند و پروژه‌محور،
            همراهتیم. بدون پیچیدگی‌های الکی، فقط کدی که به دردت می‌خوره رو یاد
            بگیر!
          </p>
        </span>
        <Lottie
          animationData={learnGif}
          loop={true}
          style={{ width: "400px", height: "400px" }}
        />
      </div>
      <div className="flex items-center justify-between text-text">
        <Lottie
          animationData={programming}
          loop={true}
          style={{ width: "400px", height: "400px" }}
        />
        <span className="w-2/3 flex flex-col gap-10 m-10">
          <h1 className="text-4xl">
            با ممی لرن، برنامه‌نویسی رو از صفر تا سینیور مثل آب خوردن یاد بگیر!
            تجربه کن، تمرین کن، و به سرعت حرفه‌ای شو.
          </h1>

          <p>
            برنامه‌نویسی قرار نیست سخت و خسته‌کننده باشه! با ممی‌لرن قدم‌به‌قدم
            یاد بگیر و از مسیرت لذت ببر. یادگیری شیرین‌تر می‌شه وقتی بدون
            سردرگمی جلو بری و دقیق بدونی قراره چی یاد بگیری و چرا.
          </p>
        </span>
      </div>
    </>
  );
};

export default Introduc;
