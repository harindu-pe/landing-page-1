import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

const workData = [
  {
    image: "/work/01.png",
    title: "Modern Kitchen",
    description: "Decor / Architecture",
  },
  {
    image: "/work/02.png",
    title: "Modern Kitchen",
    description: "Decor / Architecture",
  },
  {
    image: "/work/03.png",
    title: "Modern Kitchen",
    description: "Decor / Architecture",
  },
  {
    image: "/work/04.png",
    title: "Modern Kitchen",
    description: "Decor / Architecture",
  },
];

const Work = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] relative z-20">
      <div className="container mx-auto">
        {/* title */}
        <div className="text-center mb-24">
          <h2 className="mb-4">{"Follow Our Projects"}</h2>
          <p className="max-w-3xl mx-auto">
            {
              "It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points."
            }
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
          {workData.map((data, index) => {
            return (
              <div key={index} className="w-full max-w-[548px] h-full mx-auto">
                <Image
                  src={data.image}
                  width={548}
                  height={525}
                  alt=""
                  className="mb-6"
                />
                <div className="flex items-center justify-between px-2">
                  <div>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                  </div>
                  <Button className="w-[70px] h-[70px] transition-all duration-300 rounded-full flex items-center gap-2 bg-accent-custom2 hover:bg-accent-custom1/20">
                    <ArrowRightSLineIcon className="text-primary" size={36} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
