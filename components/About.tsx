import Image from "next/image";
import PhoneFillIcon from "remixicon-react/PhoneFillIcon";
import { Button } from "./ui/button";
import ArrowRightLineIcon from "remixicon-react/ArrowRightLineIcon";

const About = () => {
  return (
    <section className="mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto">
        <div className="flex flex-col text-center justify-between items-center gap-8 xl:gap-[74px] xl:flex-row xl:text-left">
          {/* Text */}
          <div className=" flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
            <h2>{"We Create The Art Of Stylish Living Stylishly"}</h2>
            <p>
              {
                "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal."
              }
            </p>
            <div className="flex items-center justify-center xl:justify-start gap-4">
              <div className=" bg-accent-custom1/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                <PhoneFillIcon className="text-accent-custom1" size={36} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{"(123) 456 - 7890"}</div>
                <div>{"Call Us Anytime"}</div>
              </div>
            </div>
            {/* button */}
            <Button className="h-[50px] px-[30px] transition-all duration-300 text-white rounded-[18px] flex items-center gap-2 bg-primary-custom hover:bg-primary-hover mx-auto xl:mx-0">
              Get free estimation
              <ArrowRightLineIcon className="text-accent-custom1" />
            </Button>
          </div>
          {/* Image */}
          <div className="order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0">
            <Image src="/about/img.png" width={653} height={700} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
