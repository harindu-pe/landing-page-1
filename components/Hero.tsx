import React from "react";
import { Button } from "./ui/button";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";

const Hero = () => {
  return (
    <section className="h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20">
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        <div className="max-w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
          <h1 className="mb-8">{"Let Your Home Be Unique"}</h1>
          <p className="mb-8">
            {
              "There are many variations of the passages of lorem Ipsum from available,variations of the passages."
            }
          </p>
          <Button className="h-[50px] px-[30px] transition-all duration-300 text-white rounded-[18px] flex items-center gap-2 bg-primary-custom hover:bg-primary-hover mx-auto xl:mx-0">
            Get free estimation
            <ArrowRightLineIcon className="text-accent-custom1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
