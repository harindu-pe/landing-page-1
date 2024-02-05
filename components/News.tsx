import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

const newsData = [
  {
    image: "/news/01.png",
    title: "Let's Get Solution For Building Construction Work",
    date: "22 June,2024",
  },
  {
    image: "/news/02.png",
    title: "Low Cost Latest Invented Interior Designing",
    date: "24 June,2024",
  },
  {
    image: "/news/03.png",
    title: "Best For Any Office & Business Interior ",
    date: "28 June,2024",
  },
];

const News = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto">
        {/* title */}
        <div className="text-center mb-24">
          <h2 className="mb-4">{"Articles & News"}</h2>
          <p className="max-w-3xl mx-auto">
            {
              "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
            }
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[27px]">
          {newsData.map((data, index) => {
            return (
              <div
                key={index}
                className="w-full max-w-[382px] h-[520px] border border-primary-custom/20 rounded-[62px] p-[20px] hover:bg-accent-custom2 transition-all group cursor-pointer mx-auto xl:mx-0"
              >
                <Image
                  src={data.image}
                  width={340}
                  height={290}
                  alt=""
                  className="mb-5"
                />
                <div className="flex flex-col gap-[20px]">
                  <h3>{data.title}</h3>
                  <div className="flex items-center justify-between">
                    <p>{data.date}</p>
                    <Button className="w-[70px] h-[70px] transition-all duration-300 rounded-full flex items-center gap-2 bg-accent-custom2 hover:bg-accent-custom1/20">
                      <ArrowRightSLineIcon className="text-primary" size={36} />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
